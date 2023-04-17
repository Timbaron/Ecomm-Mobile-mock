import { StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import React from "react";

const Header = () => (
  <View style={styles.header}>
    <View style={styles.subHeader}>
      <Text style={styles.welcome}>Welcome back</Text>
      <Text style={styles.name}>    Akiode Timothy</Text>
    </View>
    <View style={styles.bell}>
      <AntDesign name="bells" size={20} color="black" />
    </View>
  </View>
);

export default Header;

const styles = StyleSheet.create({
  header: {
    backgroundColor: "transparent",
    width: "100%",
    height: "25%",
    padding: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  subHeader: {
    height: '30%',
    alignItems: "center",
    justifyContent: "center",
  },
  
  welcome: {
    color: "red",
    fontSize: 20,
    fontWeight: "bold",.
  },
  name: {
    fontWeight: 'bold'
  }
});
