import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const catNames = [
    { name: "Jimbo" },
    { name: "Beavis" },
    { name: "Chad" },
    { name: "Beemo" },
    { name: "Chrissy" },
    { name: "A1" },
    { name: "Pizza Man" },
    { name: "Donut" },
    { name: "Chester" },
    { name: "Wanda" }
  ];

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={friend => friend.name}
      data={catNames}
      renderItem={({ item }) => {
        return <Text style={styles.textStyle}>{item.name}</Text>;
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50
  }
});

export default ListScreen;
