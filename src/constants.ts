export const EPOCH_INTERVAL = 9600;

// NOTE could get this from an outside source since it changes slightly over time
export const BLOCK_RATE_SECONDS = 3;

interface IAddresses {
  [key: number]: { [key: string]: string };
}
export const addresses: IAddresses = {
  43114: {
    BUSD_ADDRESS: "0x57a2d4989a6e13f522e48b3d5393953ad13c7e28",
    TOKEN_ADDRESS: "0x57a2d4989a6e13f522e48b3d5393953ad13c7e28",
    PRESALE_ADDRESS: "0x451bAA9b5ECAF44A7a9aBFc8D0aD9f1c0d73F1ee"
  },
};
