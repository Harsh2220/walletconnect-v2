import "./expo-crypto-shim.ts";
import { Web3Modal } from "@web3modal/react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet } from "react-native";
import ConnectWallet from "./components/ConnectWallet/index";

const projectId = "YOUR_PROJECT_ID";

const providerMetadata = {
  name: "YOUR_PROJECT_NAME",
  description: "YOUR_PROJECT_DESCRIPTION",
  url: "https://your-project-website.com/",
  icons: ["https://your-project-logo.com/"],
  redirect: {
    native: "YOUR_APP_SCHEME://",
    universal: "YOUR_APP_UNIVERSAL_LINK.com",
  },
};

export default function App() {
  return (
    <SafeAreaView style={styles.screenContainer}>
      <StatusBar style="auto" />
      <ConnectWallet />
      <Web3Modal projectId={projectId} providerMetadata={providerMetadata} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
});
