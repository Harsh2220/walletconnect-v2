import { Web3Button, useWeb3Modal } from "@web3modal/react-native";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function UsingWeb3Button() {
  const { isConnected, address } = useWeb3Modal();

  return (
    <View style={styles.container}>
      <Web3Button />
      <View style={styles.textContainer}>
        {isConnected ? <Text>{address}</Text> : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  textContainer: {
    marginTop: 16,
    marginBottom: 48,
  },
});
