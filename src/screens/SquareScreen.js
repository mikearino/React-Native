import React from "React";
import { View, Text, StyleSheet } from "react-native";
import ColorCounter from "../components/ColorCounter";

const SquareScreen = () => {
  return (
    <View>
      <ColorCounter color="red" />
      <ColorCounter color="blue" />
      <ColorCounter color="green" />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
