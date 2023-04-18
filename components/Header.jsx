import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Feather } from "@expo/vector-icons"; // Import Feather icon library
import SearchButton from "./SearchButton";

const Header = ({ userName }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.greetingContainer}>
          <Text style={styles.greetingText}>Welcome back!</Text>
          <Text style={styles.userName}>{userName}</Text>
        </View>
        <TouchableOpacity style={styles.notificationContainer}>
          <Feather name="bell" size={24} color="#e08466" />
        </TouchableOpacity>
      </View>

      <SearchButton />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    // paddingHorizontal: 10,
    paddingVertical: 12,
    backgroundColor: "white",
  },
  header: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  greetingContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  greetingText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#e08466"
  },
  userName: {
    fontSize: 15,
    fontWeight: "bold",
    color: "black",
  },
  notificationContainer: {
    marginLeft: "auto",
  },
});

export default Header;
