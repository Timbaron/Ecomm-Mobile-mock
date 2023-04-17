import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import {Header, Banner, Categories, Products} from './'

const Home = () => {
  return (
    <View style={styles.container}>
        <Header />
        <Banner />
        <Categories />
        <Products />
      
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      padding: 24,
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