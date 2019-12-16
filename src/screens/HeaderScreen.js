import React from "React";
import { Text, StyleSheet, View } from "react-native";

const HeaderScreen = () => {
  const MyName = <Text>- Jonathan The Zombie"</Text>;

  return (
    <View>
      <Text style={styles.headerSize}>Boot Up React Native</Text>
      <Text style={styles.textStyle}>I like Turtles{MyName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20
  },
  headerSize: {
    fontSize: 45
  }
});

export default HeaderScreen;
