import { createContext, useState, useEffect } from 'react'
import { useMoralis, useMoralisQuery } from 'react-moralis'
import { amazonAbi, amazonCoinAddress } from '../lib/constants'
import { ethers } from 'ethers'

export const AmazonContext = createContext()

export const AmazonProvider = ({ children }) => {
	const [nickname, setNickname] = useState('')
	const [username, setUsername] = useState('')
	const [assets, setAssets] = useState([])

	const { authenticate, isAuthenticated, enableWeb3, Moralis, user, isWeb3Enabled } = useMoralis()

	const { data: userData, error: userDataError, isLoading: userDataIsLoading } = useMoralisQuery('_User')

	const { data: assetsData, error: assetsDataError, isLoading: assetsDataIsLoading } = useMoralisQuery('assets')

	useEffect(() => {
		;(async () => {
			if (isAuthenticated) {
				const currentUsername = await user?.get('nickname')
				setUsername(currentUsername)
			}
		})()
	}, [isAuthenticated, user, username])

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
			if (isWeb3Enabled) {
				await getAssets()
			}
		})()
	}, [userData, assetsData, assetsDataIsLoading, userDataIsLoading])

	return (
		<AmazonContext.Provider
			value={{
				isAuthenticated,
				nickname,
				setNickname,
				username,
				setUsername,
				handleSetUsername,
				assets,
			}}
		>
			{children}
		</AmazonContext.Provider>
	)
}
