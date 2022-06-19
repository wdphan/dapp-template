require('@nomiclabs/hardhat-waffle')

const NEXT_PUBLIC_MORALIS_SERVER = process.env.NEXT_PUBLIC_MORALIS_SERVER

const GOERLI_PRIVATE_KEY = process.env.GOERLI_PRIVATE_KEY

const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY

module.exports = {
	solidity: '0.8.4',
	networks: {
		goerli: {
			url: 'NEXT_PUBLIC_MORALIS_SERVER',
			accounts: GOERLI_PRIVATE_KEY,
		},
	},
}
