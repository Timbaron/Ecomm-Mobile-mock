import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react';
import {Header, Banner, Categories, Products} from './'

const Home = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState(0);
  const [products, setProducts] = useState([])

  return (
    <View style={styles.container}>
        <Header />
        <Banner />
        <Categories selectedCategoryId={selectedCategoryId} setSelectedCategoryId={setSelectedCategoryId} />
        <Products products={products} />
      
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      paddingTop: 24,
      padding:20,
      gap: 15
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