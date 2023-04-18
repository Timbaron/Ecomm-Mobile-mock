import React, { useState, useEffect } from "react";
import axios from "axios";

export const useFetch = (url, query) => {
  const BASE_URL = "https://dummyjson.com";
  console.log(`${BASE_URL}/${url}`);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const options = {
    method: "GET",
    url: `${BASE_URL}/${url}`,
    params: {
      ...query,
    }    
  };
  console.log(options);


  const fetchData = async () => {
    try {
      setLoading(true);
      await axios.request(options).then(function (response) {
        setData(response.data.data);
        setLoading(false);
      });
    } catch {
      setError(error);
      alert("There is an error");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    // fetchData();
  }, []);
  return { response, error, loading };
};
