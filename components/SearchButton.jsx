import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";

const SearchButton = () => {
  return (
    <View style={styles.searchContainer}>
      <Feather name="search" size={20} color="gray" style={styles.searchIcon} />
      <TextInput
        style={styles.searchInput}
        placeholder="Search for any products"
        placeholderTextColor="gray"
        cursorColor="#e08466"      
      />
    </View>
  );
};

export default SearchButton;

const styles = StyleSheet.create({
  searchButtonView: {
    backgroundColor: "lightgrey",
    height: 60,
    width: "100%",
    padding: 5,
    borderRadius: 9,
  },
  searchContainer: {
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'lightgray',
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 60
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: 'black',
  },
});
