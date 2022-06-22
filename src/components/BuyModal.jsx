import React, { useContext, useEffect } from 'react'
import { IoIosClose } from 'react-icons/io'
import { DroppContext } from '../context/DroppContext'
import { HashLoader } from 'react-spinners'
import Link from 'next/link'

const BuyModal = ({ close, buyTokens }) => {
	const styles = {
		container: `h-[60vh] flex flex-col bg-[#1B1C2C] items-center justify-center relative`,
		closeX: ` absolute top-2 left-[37rem] justify-end text-[#F28E54]`,
		title: `text-4xl font-bold flex items-center justify-center text-white mb-5 mt-5`,
		content: `flex w-full mb-[30px] text-xl justify-center text-[#A3A4A5] font-bold`,
		input: `w-[50%] h-[70px] bg-[#1B1C2C] rounded-lg flex mx-auto`,
		inputBox: `w-full h-full flex items-center justify-center bg-[#1B1C2C] `,
		price: `w-full flex justify-center items-center font-bold text-3xl text-white mt-8 mb-4`,
		buyBtn: `w-[20%] h-[50px] bg-[#29283D] rounded-xl p-[10px] flex mx-auto text-white justify-center items-center cursor-pointer font-bold`,
		loaderContainer: ` h-[500px] flex items-center justify-center text-white`,
		loader: `h-full flex items-center justify-center`,
		etherscan: ` flex text-center items-center justify-center text-[#F28E54] text-2xl font-bold cursor-pointer mb-5`,
		success: `w-[30rem] h-[5rem] flex items-center justify-center text-center text-xl  font-bolder mt-2`,
	}
	const {
		amountDue,
		setAmountDue,
		tokenAmount,
		setTokenAmount,
		isLoading,
		setIsLoading,
		etherscanLink,
		setEtherscanLink,
	} = useContext(DroppContext)
	useEffect(() => {
		calculatePrice()
	}, [tokenAmount])

	const calculatePrice = () => {
		const price = parseFloat(tokenAmount * 0.0001)
		price = price.toFixed(4)
		setAmountDue(price)
	}

	return (
		<div className={styles.container}>
			{isLoading ? (
				<>
					<div className={styles.loaderContainer}>
						<HashLoader size={80} />
					</div>
				</>
			) : (
				<>
					<div className={styles.closeX}>
						<IoIosClose
							onClick={() => {
								close()
								setAmountDue('')
								setTokenAmount('')
								setEtherscanLink('')
							}}
							fontSize={50}
							className="cursor-pointer"
						/>
					</div>
					<div className={styles.title}>Buy Dropp Coins</div>
					<div className={styles.content}>Select how many tokens you would like to buy.</div>
					<div className={styles.input}>
						<input
							type="text"
							placeholder="Amount..."
							className={styles.inputBox}
							onChange={e => setTokenAmount(e.target.value)}
							value={tokenAmount}
						/>
					</div>
					<div className={styles.price}>
						Total Due: {tokenAmount && tokenAmount > 0 ? amountDue + 'ETH' : '0 ETH'}
					</div>
					<button
						className={styles.buyBtn}
						disabled={!tokenAmount || tokenAmount < 0}
						onClick={() => {
							setIsLoading(true)
							buyTokens()
						}}
					>
						Buy
					</button>
					{etherscanLink && (
						<>
							<div className={styles.success}>
								Transaction Sucessful. Check out your receipt for your transaction below!
							</div>
							<Link href={`${etherscanLink}`} className={styles.etherscan}>
								<a className={styles.etherscan} target="_blank">
									Transaction Receipt
								</a>
							</Link>
						</>
					)}
				</>
			)}
		</div>
	)
}

export default BuyModal
