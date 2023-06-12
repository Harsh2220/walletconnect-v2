import React, { useState } from "react";
import { StyleSheet, Switch, Text, View } from "react-native";
import UsingWeb3Button from "./UsingWeb3Button";
import UsingCustomButton from "./UsingCustomButton";

export default function ConnectWallet() {
  const [isEnabled, setIsEnabled] = useState<boolean>(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        {isEnabled ? <UsingWeb3Button /> : <UsingCustomButton />}
        <View style={styles.customBtnContainer}>
          <Text style={styles.customBtnTitle}>Connect using Web3Button?</Text>
          <Switch onValueChange={toggleSwitch} value={isEnabled} />
        </View>
      </View>
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
  innerContainer: {
    justifyContent: "space-between",
    alignItems: "center",
  },
  customBtnContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  customBtnTitle: {
    marginRight: 16,
    fontSize: 16,
    fontWeight: "600",
  },
});
