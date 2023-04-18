import React, { useState } from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { CategoriesList } from "../constants/categories";

const Categories = ({selectedCategory, setSelectedCategory}) => {
  const renderItem = ({ item }) => {
    const categoryName = unslugAndTitleCase(item.name);
    const backgroundColor = item.name === selectedCategory ? "#e08466" : "lightgrey";
    const color = item.name === selectedCategory ? "white" : "black";

    const handlePress = () => {
      setSelectedCategory(item.name);
    };

    return (
      <TouchableOpacity
        onPress={handlePress}
        style={[styles.item, { backgroundColor }]}
      >
        <Text style={[styles.text, { color }]}>{categoryName}</Text>
      </TouchableOpacity>
    );
  };

  // Function to unslug and convert string to title case
  const unslugAndTitleCase = (str) => {
    const words = str.split("-");
    const titleCaseWords = words.map((word) => {
      const firstLetter = word.charAt(0).toUpperCase();
      const restOfWord = word.slice(1);
      return `${firstLetter}${restOfWord}`;
    });
    return titleCaseWords.join(" ");
  };

  return (
    <View style={styles.listContainer}>
      <FlatList
        data={CategoriesList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
      />
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
  },
  item: {
    height: 50,
    paddingHorizontal: 10,
    justifyContent: "center",
    backgroundColor: "grey",
    marginRight: 7,
    borderRadius: 16,
    minWidth:70,
    alignItems: "center",
  },
  listContainer: {
    height: 60
  }
});
