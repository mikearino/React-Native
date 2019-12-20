import React, { useState } from "React";
import { View, Text, StyleSheet } from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 15;

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);
  console.log("red");

  const setColor = (color, change) => {
    // color is goin to be equal to red green or blue
    //change is going to be +15 or minus 15
    switch (color) {
      case "red":
        red + change > 255 || red + change < 0 ? null : setRed(red + change);
        return;
      case "blue":
        blue + change > 255 || blue + change < 0
          ? null
          : setBlue(blue + change);
        return;
      case "green":
        green + change > 255 || green + change < 0
          ? null
          : setGreen(green + change);
        return;
    }
  };

  return (
    <View>
      <ColorCounter
        onIncrease={() => setColor("red", COLOR_INCREMENT)}
        onDecrease={() => setColor("red", -1 * COLOR_INCREMENT)}
        color="red"
      />
      <ColorCounter
        onIncrease={() => setBlue("blue", COLOR_INCREMENT)}
        onDecrease={() => setBlue("blue" - 1 * COLOR_INCREMENT)}
        color="blue"
      />
      <ColorCounter
        onIncrease={() => setGreen("green", COLOR_INCREMENT)}
        onDecrease={() => setGreen("green" - 1 * COLOR_INCREMENT)}
        color="green"
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
