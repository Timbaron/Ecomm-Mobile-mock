import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Header, Banner, Categories, Products } from "./";
import { useFetch } from "../utils/useFetch";

// Import dummy data
import { ProductsList } from "../constants/products";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [productsList, setProductsList] = useState([]);
  useEffect(() => {
    if (selectedCategory !== "all") {
      const productsList = ProductsList[0].products.filter(
        (product) => product.category === selectedCategory
      );
      setProductsList(productsList);
    }
    else{ 
      setProductsList(ProductsList[0].products);
    }
  }, [selectedCategory]);

  return (
    <View style={styles.container}>
      <Header />
      <Banner />
      <Categories
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <Products products={productsList} numberOfDisplay={10} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 24,
    padding: 20,
    gap: 15,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
