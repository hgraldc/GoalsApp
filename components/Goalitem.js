import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Goalitem(props) {
  return (
      <View style={styles.goalItem}>
        <Pressable
          android_ripple={{ color: "#210644" }}
          onPress={props.onDeleteItem.bind(this, props.id)}
          style={({ pressed }) => pressed && styles.pressedItem} //efek untuk IOS
        >
          <Text style={styles.goalText}>{props.text}</Text>
        </Pressable>
      </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    color: "white",
    padding: 8,
  },
});
