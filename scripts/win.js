const { ethers, waffle } = require("hardhat");
const provider = waffle.provider;

const GAME_ADDRESS = "0x2189dEA57cd73Fc1C64aC61281c71D9e3F24713D";

async function main() {
  const game = await hre.ethers.getContractAt("Game3", GAME_ADDRESS);

  const amount = ethers.utils.parseUnits("1", "gwei");

  const tx = await game.win({ value: amount });
  const receipt = await tx.wait();

  console.log(await provider.getBalance(GAME_ADDRESS));
  console.log(receipt.confirmations);
  // console.log(secret);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
