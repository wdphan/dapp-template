require('@nomiclabs/hardhat-waffle')
require('dotenv').config({ path: '.env' })
require('@nomiclabs/hardhat-etherscan')
require

let secret = require('./secret.json')

task('accounts', 'Prints the list of accounts', async (taskArgs, hre) => {
	const accounts = await hre.ethers.getSigners()

	for (const account of accounts) {
		console.log(account.address)
	}
})

module.exports = {
	solidity: '0.8.4',
	networks: {
		goerli: {
			url: secret.url,
			accounts: [secret.key],
		},
	},
}
