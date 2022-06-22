import { createContext, useState, useEffect } from 'react'
import { useMoralis, useMoralisQuery } from 'react-moralis'
import { droppAbi, droppCoinAddress } from '../lib/constants'
import { ethers } from 'ethers'

export const DroppContext = createContext()

export const DroppProvider = ({ children }) => {
	const [nickname, setNickname] = useState('')
	const [username, setUsername] = useState('')
	const [assets, setAssets] = useState([])
	const [balance, setBalance] = useState('')
	const [tokenAmount, setTokenAmount] = useState('')
	const [amountDue, setAmountDue] = useState('')
	const [isLoading, setIsLoading] = useState(false)
	const [etherscanLink, setEtherscanLink] = useState('')
	const [currentAccount, setCurrentAccount] = useState('')
	const [recentTransactions, setRecentTransactions] = useState([])
	const [ownedItems, setOwnedItems] = useState([])
	const [isShown, setIsShown] = useState(false)

	const handleClick = event => {
		// toggle shown state
		setIsShown(current => !current)
	}

	const { authenticate, isAuthenticated, enableWeb3, Moralis, user, isWeb3Enabled } = useMoralis()

	const { data: userData, error: userDataError, isLoading: userDataIsLoading } = useMoralisQuery('_User')

	const { data: assetsData, error: assetsDataError, isLoading: assetsDataIsLoading } = useMoralisQuery('assets')

	const listenToUpdates = async () => {
		let query = new Moralis.Query('EthTransactions')
		let subscription = await query.subscribe()
		subscription.on('update', async object => {
			console.log('New Transactions')
			console.log(object)
			setRecentTransactions([object])
		})
	}

	const getBalance = async () => {
		try {
			if (!isAuthenticated || !currentAccount) return
			const options = {
				contractAddress: droppCoinAddress,
				functionName: 'balanceOf',
				abi: droppAbi,
				params: {
					account: currentAccount,
				},
			}
			if (isWeb3Enabled) {
				const response = await Moralis.executeFunction(options)
				console.log(response.toString())
				setBalance(response.toString())
			}
		} catch (error) {
			console.log(error)
		}
	}

	const getAssets = async () => {
		try {
			await enableWeb3()
			setAssets(assetsData)
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		;(async () => {
			if (isAuthenticated) {
				await getBalance()
				await listenToUpdates()
				const currentUsername = await user?.get('nickname')
				setUsername(currentUsername)
				const account = await user?.get('ethAddress')
				setCurrentAccount(account)
			} else {
				setBalance('')
			}
		})()
	}, [isAuthenticated, user, username, currentAccount, setBalance, balance, listenToUpdates])

	const handleSetUsername = () => {
		if (user) {
			if (nickname) {
				user.set('nickname', nickname)
				user.save()
				setNickname('')
			} else {
				console.log("Can't set empty nickname")
			}
		} else {
			console.log('No user')
		}
	}

	const buyAsset = async (price, asset) => {
		try {
			if (!isAuthenticated) return
			console.log('price: ', price)
			console.log('asset: ', asset.name)
			console.log(userData)

			const options = {
				type: 'erc20',
				amount: price,
				receiver: droppCoinAddress,
				contractAddress: droppCoinAddress,
			}

			let transaction = await Moralis.transfer(options)
			const receipt = await transaction.wait()

			if (receipt) {
				//You can do this but it's not necessary with Moralis hooks!
				// const query = new Moralis.Query('_User')
				// const results = await query.find()

				const res = userData[0].add('ownedAssets', {
					...asset,
					purchaseDate: Date.now(),
					etherscanLink: `https://goerli.etherscan.io/tx/${receipt.transactionHash}`,
				})

				await res.save().then(() => {
					alert("You've successfully purchased this asset!")
				})
			}
		} catch (error) {
			console.log(error.message)
		}
	}

	const buyTokens = async () => {
		if (!isAuthenticated) {
			await connectWallet()
		}

		const amount = ethers.BigNumber.from(tokenAmount)
		const price = ethers.BigNumber.from('100000000000000')
		const calcPrice = amount.mul(price)

		console.log(droppCoinAddress)

		let options = {
			contractAddress: droppCoinAddress,
			functionName: 'mint',
			abi: droppAbi,
			msgValue: calcPrice,
			params: {
				amount,
			},
		}
		const transaction = await Moralis.executeFunction(options)
		const receipt = await transaction.wait()
		setIsLoading(false)
		console.log(receipt)
		setEtherscanLink(`https://goerli.etherscan.io/tx/${receipt.transactionHash}`)
	}

	const getOwnedAssets = async () => {
		try {
			// let query = new Moralis.Query('_User')
			// let results = await query.find()

			if (userData[0].attributes.ownedAssets) {
				setOwnedItems(prevItems => [...prevItems, userData[0].attributes.ownedAsset])
			}
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		;(async () => {
			if (isWeb3Enabled) {
				await getOwnedAssets()
				await getAssets()
			}
		})()
	}, [userData, assetsData, assetsDataIsLoading, userDataIsLoading])

	return (
		<DroppContext.Provider
			value={{
				isAuthenticated,
				buyTokens,
				getBalance,
				balance,
				nickname,
				setNickname,
				username,
				handleSetUsername,
				assets,
				setTokenAmount,
				tokenAmount,
				amountDue,
				setAmountDue,
				isLoading,
				setIsLoading,
				setEtherscanLink,
				etherscanLink,
				currentAccount,
				buyAsset,
				recentTransactions,
				ownedItems,
				handleClick,
				isShown,
				setIsShown,
			}}
		>
			{children}
		</DroppContext.Provider>
	)
}
