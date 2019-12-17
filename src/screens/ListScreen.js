import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const catNames = [
    { name: "Jimbo", age: 34 },
    { name: "Beavis", age: 3874 },
    { name: "Chad", age: 3584 },
    { name: "Beemo", age: 378654 },
    { name: "Chrissy", age: 384 },
    { name: "A1", age: 3674 },
    { name: "Pizza Man", age: 385 },
    { name: "Donut", age: 3 },
    { name: "Chester", age: 4 },
    { name: "Wanda", age: 33 }
  ];

  return (
    <FlatList
      keyExtractor={cat => cat.name}
      data={catNames}
      renderItem={({ item }) => {
        return (
          <Text style={styles.textStyle}>
            The cat name is {item.name} and the age of the cat is {item.age}
          </Text>
        );
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
