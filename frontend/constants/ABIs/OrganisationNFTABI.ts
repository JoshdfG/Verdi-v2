export const OrganisationNFTABI = [
  { inputs: [], stateMutability: "nonpayable", type: "constructor" },
  {
    inputs: [
      { internalType: "string", name: "Name", type: "string" },
      { internalType: "string", name: "Symbol", type: "string" },
      { internalType: "string", name: "Uri", type: "string" },
      { internalType: "address", name: "_Admin", type: "address" },
    ],
    name: "completePackage",
    outputs: [
      { internalType: "address", name: "newRewardNFT", type: "address" },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "string", name: "Name", type: "string" },
      { internalType: "string", name: "Symbol", type: "string" },
      { internalType: "string", name: "Uri", type: "string" },
      { internalType: "address", name: "_Admin", type: "address" },
    ],
    name: "createAttendanceNft",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "nonpayable",
    type: "function",
  },
];
