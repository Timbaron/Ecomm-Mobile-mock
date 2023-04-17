import React, { useState } from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { CategoriesList } from "../constants/categories";

const Categories = ({selectedCategoryId, setSelectedCategoryId}) => {
  const renderItem = ({ item }) => {
    const categoryName = unslugAndTitleCase(item.name);
    const backgroundColor = item.id === selectedCategoryId ? "#e08466" : "lightgrey";
    const color = item.id === selectedCategoryId ? "white" : "black";

    const handlePress = () => {
      setSelectedCategoryId(item.id);
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
    <View>
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
});
