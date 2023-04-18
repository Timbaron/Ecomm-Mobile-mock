import { StyleSheet, Text, View } from "react-native";
import { Home } from "../components";
import { StatusBar } from "expo-status-bar";

export default function Page() {
  return (
    <>
      <Home />
      <StatusBar style="auto" />
    </>
  );
}
