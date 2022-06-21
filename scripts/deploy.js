const hre = require('hardhat')

async function main() {
  const DroppCoinFactory = await hre.ethers.getContractFactory('DroppCoin')
  const DroppCoin = await DroppCoinFactory.deploy()

  await DroppCoin.deployed()

  console.log('Dropp Coin deployed to:', DroppCoin.address)
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error)
    process.exit(1)
  })