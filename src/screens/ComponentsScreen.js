import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
  const name = "- Jonathon the Zombie";

  return (
    <View>
      <Text style={styles.textStyle}>I like turtles</Text>
      <Text style={styles.subHeaderStyle}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45
  },
  subHeaderStyle: {
    fontSize: 20
  }
});

export default ComponentsScreen;
