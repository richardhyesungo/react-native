import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Alert,
  Image,
  ScrollView,
  SafeAreaView,
} from "react-native";
import TypeScript from "./components/TypeScript.tsx";
// import axios from "axios";
fetch("https://pokeapi.co/api/v2/pokemon/ditto")
  .then((response) => {
    return response.json();
  })
  .then((json) => {
    console.log("json", json);
  });

const image = { uri: "https://reactnative.dev/img/tiny_logo.png" };

export default function App() {
  const [names, setNames] = useState(["Richard"]);
  const [counter, setCounter] = useState(0);
  const [userInput, setUserInput] = useState("testing");
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.container}>
          <Image
            source={image}
            resizeMode="cover"
            style={{ width: 50, height: 50 }}
          ></Image>
          <Text>
            Open up App.js to start working on your app! helllloooo!!!
          </Text>
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
          <Text>reset</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: StatusBar.currentHeight,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
});
