import { StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import React from "react";
import SearchButton from "./SearchButton";

const Header = () => (
  <>
    <View style={styles.header}>
      <View style={styles.mainHeader}>
        <View style={styles.subHeader}>
          <Text style={styles.welcome}>Welcome back!</Text>
          <Text style={styles.name}> Akiode Timothy</Text>
        </View>
        <View style={styles.bell}>
          <AntDesign name="bells" size={20} color="black" />
        </View>
      </View>
      <SearchButton />
    </View>
  </>
);

export default Header;

const styles = StyleSheet.create({
  header: {
    backgroundColor: "transparent",
    width: "100%",
    height: "20%",
    paddingTop: 20,
    display: "flex",
    flexDirection: "column",
  },
  mainHeader: {
    justifyContent: "space-between",
    display: "flex",
    flexDirection: "row",
    height: "75%"
  },
  subHeader: {
    MarginTop: 10,
    height: "30%",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    // flexDirection: "row",
  },

  welcome: {
    color: "red",
    fontSize: 20,
    fontWeight: "bold",
  },
  name: {
    fontWeight: "bold",
  },
});
