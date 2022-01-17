import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput, Alert } from "react-native";
import TypeScript from "./TypeScript";

export default function App() {
  const [names, setNames] = useState(["Richard"]);
  const [counter, setCounter] = useState(0);
  const [userInput, setUserInput] = useState("testing");
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app! helllloooo</Text>
      {names.map((num, idx) => {
        return <Text key={idx}>{num}</Text>;
      })}
      <TypeScript names={names} />
      <StatusBar style="auto" />
      <Text>{counter}</Text>
      <Button
        title="Press me"
        onPress={() => {
          setCounter(counter + 1);
        }}
      ></Button>
      <TextInput
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        defaultValue={userInput}
      ></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
