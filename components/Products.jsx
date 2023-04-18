import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

const Item = ({ item }) => {
  const onPressFavorite = () => {
    // Perform any logic you want when the favorite button is pressed
    // For example, you can add the product to a list of favorites in your app's state or perform a network request to mark the product as a favorite on the backend
    console.log("Favorite button pressed!");
  };

  return (
    <View style={styles.itemCard}>
      <View style={{alignItems: 'center', padding: 5}}>
      <Image
        source={{ uri: item.images[0] }}
        style={styles.image}
        resizeMode="contain"
      />
      <TouchableOpacity onPress={onPressFavorite} style={styles.favoriteButton}>
        <Text style={styles.favoriteIcon}>♡</Text>
      </TouchableOpacity>
      </View>
      <View style={styles.detailsOne}>
        <View style={styles.details}>
          <Text style={styles.itemTitle}>{item.title}</Text>
          <Text style={styles.price}>${item.price}</Text>
        </View>
        <View style={styles.details}>
          <Text style={{color: '#e08466'}}>
            <Ionicons name="md-star" size={20} color="#e08466" />
             ({item.rating})
          </Text>
          <Text>egeg</Text>
        </View>
      </View>
    </View>
  );
};

const Products = ({ products, numberOfDisplay }) => {
  const [numColumns, setNumColumns] = useState(2); // Number of columns in the two-column layout

  // Calculate the width of each item based on the screen width and number of columns
  const itemWidth = Dimensions.get("window").width / numColumns;

  // Extract a subarray of the first 10 items from the products array
  const data = products?.slice(0, numberOfDisplay);

  return (
    <View style={styles.productsContainer}>
      <FlatList
        data={data}
        renderItem={({ item }) => <Item item={item} />}
        keyExtractor={(item) => item.id.toString()}
        key={numColumns} // Set the key prop to force re-render when numColumns changes
        numColumns={numColumns} // Set the number of columns
        columnWrapperStyle={{ width: itemWidth }} // Set the width of each column
      />
    </View>
  );
};

export default Products;

const styles = StyleSheet.create({
  productsContainer: {
    width: "100%",
    height: 250,
    backgroundColor: "#FFFFFF",
    // padding: 3,
    justifyContent: "space-between",
  },
  itemCard: {
    backgroundColor: "lightgrey",
    borderRadius: 8,
    elevation: 3,
    margin: 8,
    overflow: "hidden",
    width: 140,
  },
  image: {
    height: 150,
    width: "100%",
  },
  favoriteButton: {
    position: "absolute",
    top: 8,
    right: 8,
    zIndex: 1,
  },
  favoriteIcon: {
    fontSize: 24,
    color: "red",
  },
  price: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#e08466",
  },
  detailsOne: {
    padding: 5,
  },
  details: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    // alignItems: "center",
  },
  itemTitle: {
    flex: 1,
    fontSize: 12,
    fontWeight: "bold",
    marginRight: 10,
    // backgroundColor: 'red',
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
  },
  // price: {
  //   fontSize: 16,
  //   fontWeight: 'bold',
  // },
});
