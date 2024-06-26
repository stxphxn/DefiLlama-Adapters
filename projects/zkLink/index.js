const { sumTokensExport } = require("../helper/unwrapLPs");
const ADDRESSES = require("../helper/coreAssets.json");
const ERA_ETH_ADDRESS = "0x000000000000000000000000000000000000800A";

const config = {
  ethereum: {
    owners: [
      "0x5fD9F73286b7E8683Bab45019C94553b93e015Cf",
      "0xAd16eDCF7DEB7e90096A259c81269d811544B6B6",
    ],
    tokens: [
      "0x8a053350ca5F9352a16deD26ab333e2D251DAd7c",  // mmETH
      "0xE46a5E19B19711332e33F33c2DB3eA143e86Bc10", // mwBETH  
      "0x32bd822d615A3658A68b6fDD30c2fcb2C996D678", // mswETH 
      "0x49446A0874197839D15395B908328a74ccc96Bc0", // mstETH
      "0xC6572019548dfeBA782bA5a2093C836626C7789A", // nETH   
      "0x57F5E098CaD7A3D1Eed53991D4d66C45C9AF7812", // wUSDM
    ]
  },
  arbitrum: {
    owners: [
      "0xFF73a1a1d27951A005eb23276dc99CB7F8d5420A",
      "0xfB0Ad0B3C2605A7CA33d6badd0C685E11b8F5585",
    ],
    tokens: [
      "0x4186BFC76E2E237523CBC30FD220FE055156b41F",  // rsETH
      "0x3082CC23568eA640225c2467653dB90e9250AaA0", // RDNT  
      "0x3abb0E23618a042ef55a624b903E9873F8756881", // ZKT 
    ],
  },
  linea: {
    owners: [
      "0x5Cb18b6e4e6F3b46Ce646b0f4704D53724C5Df05",
      "0x62cE247f34dc316f93D3830e4Bf10959FCe630f8",
    ],
    tokens: [
      "0x3aAB2285ddcDdaD8edf438C1bAB47e1a9D05a9b4",  // WBTC
      "0x2416092f143378750bb29b79eD961ab195CcEea5", // ezETH  
      "0xB5beDd42000b71FddE22D3eE8a79Bd49A568fC8F", // wstETH
      "0x531e4901EB141a71e111Cc23Fc4fBD4B7dB788d5", // ZKT  
      ADDRESSES.linea.USDT, // USDT 
      ADDRESSES.linea.DAI, // DAI
      ADDRESSES.linea.USDC, // USDC
    ],
  },
  era: {
    owners: ["0xaB3DDB86072a35d74beD49AA0f9210098ebf2D08", '0xaFe8C7Cf33eD0fee179DFF20ae174C660883273A'],
    tokens: [
      ADDRESSES.null,
      ADDRESSES.era.WBTC, //btc
      ADDRESSES.era.USDC, //usdc
      ADDRESSES.era.USDT, //usdt
    ],
  },
  mantle: {
    owners: [
      "0xD784d7128B46B60Ca7d8BdC17dCEC94917455657",
      "0x62351b47e060c61868Ab7E05920Cb42bD9A5f2B2",
    ],
    tokens: [
      ADDRESSES.mantle.WMNT, //mnt
      ADDRESSES.mantle.USDT, //usdt
      ADDRESSES.mantle.WETH,//weth
      ADDRESSES.mantle.USDC, //usdc
      "0xCAbAE6f6Ea1ecaB08Ad02fE02ce9A44F09aebfA2", // WBTC
      "0xcDA86A272531e8640cD7F1a92c01839911B90bb0", // meth
      "0x779f4E5fB773E17Bc8E809F4ef1aBb140861159a", // KTC
      "0x531e4901EB141a71e111Cc23Fc4fBD4B7dB788d5", // zkt
    ],
  },
  manta: {
    owners: [
      "0xD784d7128B46B60Ca7d8BdC17dCEC94917455657",
      "0x44a65dc12865A1e5249b45b4868f32b0E37168FF",
    ],
    tokens: [
      ...Object.values(ADDRESSES.manta),
      ADDRESSES.null,
      "0x95CeF13441Be50d20cA4558CC0a27B601aC544E5", //MANTA
      "0xEc901DA9c68E90798BbBb74c11406A32A70652C3", //STONE
      "0xbdAd407F77f44F7Da6684B416b1951ECa461FB07", //WUSDM
      "0x34c7Ad65E4163306f8745996688b476914201cE0", //uniETH
      "0x9Af5CC797695717A20eCF3E258D6303316277A55", //ZKT
    ],
  },
  blast: {
    owners: [
      "0x29BA92Fe724beD5c5EBfd0099F2F64a6DC5078FD",
      "0x8Df0c2bA3916bF4789c50dEc5A79b2fc719F500b",
    ],
    tokens: [
      ADDRESSES.null,
      "0x2416092f143378750bb29b79eD961ab195CcEea5", // ezeth
      "0x8cDe337D4D39f692f867c9FFA696f555EdaB4BeD", // zkt
      "0x038f1C6ED5FccF690A920a27b39366eeeF27eFCe", // rich
      "0x5FE8534a6F96cb01261Bd96e98c17C2c1Cab3204", // BAJA
      "0xf782E172A14Ee1c85cD980C15375bA0E87957028", // CACA
    ],
  },
  base: {
    owners: [
      "0xE473ce141b1416Fe526eb63Cf7433b7B8d7264Dd",
      "0x80d12A78EfE7604F00ed07aB2f16F643301674D5",
    ],
    tokens: [
      "0xc1CBa3fCea344f92D9239c08C0568f6F2F0ee452",  // wstETH
      "0x60F6659f92Db201670c39CC51D3630eD32cEdBb5", // ZKT  
    ],
  },
  optimism: {
    owners: [
      "0x46C8D02E93d5a03899dFa7Cf8A40A07589A3fA1b",
      "0x5Bd51296423A9079b931414C1De65e7057326EaA",
    ],
    tokens: [
      "0x7d685a13eaFd76c12Dc6a9E9340778381Eef6bd7", // ZKT  
    ],
  },
}

Object.keys(config).forEach(chain => {
  const fetchCoValentTokens = !['manta'].includes(chain)
  module.exports[chain] = {
    tvl: sumTokensExport({ ...config[chain], fetchCoValentTokens, })
  }
})
