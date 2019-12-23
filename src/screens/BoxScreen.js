import React from "react";
import { Text, View, StyleSheet } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <View style={styles.redBox}></View>
      <View style={styles.greenBox}></View>
      <View style={styles.blueBox}></View>
    </View>
  );
};

styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: "black",
    height: 500,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  redBox: {
    height: 100,
    width: 100,
    backgroundColor: "red",
    borderWidth: 3,
    borderColor: "red"
  },
  greenBox: {
    height: 100,
    width: 100,
    backgroundColor: "green",
    borderWidth: 3,
    borderColor: "red",
    top: 100
  },
  blueBox: {
    height: 100,
    width: 100,
    backgroundColor: "blue",
    borderWidth: 3,
    borderColor: "red"
  }
});

export default BoxScreen;
