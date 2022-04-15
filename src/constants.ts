export const EPOCH_INTERVAL = 9600;

// NOTE could get this from an outside source since it changes slightly over time
export const BLOCK_RATE_SECONDS = 3;

interface IAddresses {
  [key: number]: { [key: string]: string };
}
export const addresses: IAddresses = {
  43114: {
    BUSD_ADDRESS: "0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E",
    TOKEN_ADDRESS: "0x57a2d4989a6e13f522e48b3d5393953ad13c7e28",
    PRESALE_ADDRESS: "0xDdB80a7a5E2a914b848A0A4d3A52e5B4c62f356D"
  },
};
