const GAME_ADDRESS = "0x2189dEA57cd73Fc1C64aC61281c71D9e3F24713D";

async function main() {
  const game = await hre.ethers.getContractAt("IGame", GAME_ADDRESS);

  game.on("Winner", (addr) => {
    console.log(addr + " won!");
  });
}

main();
