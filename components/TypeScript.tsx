import React, { useState } from "react";
import { NativeModules, StyleSheet, Text, View } from "react-native";

export default function TypeScript({ names }: { names: string[] }) {
  const test: number = 10001;
  return (
    <>
      <Text>typescript test</Text>
      <Text>{test}</Text>
      {names.map((name: string, idx: number) => {
        return <Text key={idx}>{name}</Text>;
      })}
    </>
  );
}
