import { useWeb3Modal } from "@web3modal/react-native";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Button from "../UI/Button";

export default function UsingCustomButton() {
  const [signature, setSignature] = React.useState<null | string>(null);
  const { isConnected, address, provider, open } = useWeb3Modal();

  const disconnect = () => provider?.disconnect();

  const signMessage = async () => {
    try {
      const signature = await provider?.request({
        method: "personal_sign",
        params: [address, "YOUR_SIGN_MESSAGE"],
      });
      setSignature(signature as string);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      {/* ConnectWallet using Web3Button */}

      {isConnected ? (
        <>
          <Text>{address}</Text>
          <Button onPress={disconnect} style={styles.btnStyle}>
            Disconnect
          </Button>
        </>
      ) : (
        <Button onPress={open}>Connect Wallet</Button>
      )}

      {/* sign message  */}

      {isConnected ? (
        <>
          <Button onPress={signMessage}>Sign Message</Button>
          <View style={styles.textContainer}>
            {signature ? <Text>{signature}</Text> : null}
          </View>
        </>
      ) : null}
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
  btnStyle: {
    marginVertical: 16,
  },
  textContainer: {
    marginTop: 16,
    marginBottom: 48,
  },
});
