export enum Rpc_Methods {
  Send_Txn = "eth_sendTransaction",
  Personal_Sign = "personal_sign",
  Sign_Txn = "eth_signTransaction",
}
export enum Chains {
  Ethereum_Mainnet = "eip155:1",
  Ethereum_Goerli = "eip155:5",
  Polygon_Mainnet = "eip155:137",
  Polygon_Testnet = "eip155:80001",
}
