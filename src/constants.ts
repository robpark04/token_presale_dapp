export const EPOCH_INTERVAL = 9600;

// NOTE could get this from an outside source since it changes slightly over time
export const BLOCK_RATE_SECONDS = 3;

interface IAddresses {
  [key: number]: { [key: string]: string };
}
export const addresses: IAddresses = {
  43114: {
    BUSD_ADDRESS: "0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E",
    TOKEN_ADDRESS: "0x7184bdedE9a652d7e0A55e214d996CeeA7E7e6C5",
    PRESALE_ADDRESS: "0xDdB80a7a5E2a914b848A0A4d3A52e5B4c62f356D"
  },
};
