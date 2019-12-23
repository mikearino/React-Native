import React from "react";
import { Text, View, StyleSheet } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>This is the Box Screen</Text>
    </View>
  );
};

styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: "black"
  },
  textStyle: {
    borderWidth: 10,
    borderColor: "red",
    marginVertical: 20,
    marginHorizontal: 20
  }
});

export default BoxScreen;
