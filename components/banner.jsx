import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomButton from "./CustomButton";

const Banner = () => {
  return (
    <View style={styles.main}>
      <View style={styles.TextContainer}>
        <Text style={styles.bannerText}>
          Shop with us!
          Get 50% off 
          on Items
        </Text>
        <CustomButton title="Shop Now" width={100} color="white" onPress={() => {}} />
      </View>
      <View style={styles.imgContainer}>
        <Image
          source={require("../assets/bannerImage.png")}
          style={styles.img}
        />
      </View>
    </View>
  );
};

export default Banner;

const styles = StyleSheet.create({
  main: {
    backgroundColor: "#e08466",
    width: "100%",
    height: "25%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  imgContainer: {
    width: "50%",
  },
  TextContainer: {
    width: "50%",
    padding: 10,
    alignItems: "center",
  },
  img: {
    width: "100%",
    height: "100%",
  },
  bannerText: {
    color: "white",
    letterSpacing: 2,
    fontSize: 18,
    lineHeight: 30,
    fontWeight: "bold",
  }
});
