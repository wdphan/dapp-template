import React from 'react'
import { useContext, useEffect } from 'react'
import Cards from '../components/Cards'
import Header from './Header'
import Cover from './Cover.jsx'
import { DroppContext } from '@/context/DroppContext'

const Main = () => {
	const styles = {
		container: `h-full w-full flex flex-col mt-[50px] overflow-hidden pb-20`,
		recentTitle: `text-2xl font-bold text-center mb-[20px] text-center mt-[40px]`,
		recentTransactionsList: `flex flex-col`,
		transactionCard: `flex justify-between mb-[20px] p-[30px] bg-[#42667e] text-white rounded-xl shadow-xl font-bold gap-[20px] text-xl`,
	}
	const { recentTransactions } = useContext(DroppContext)
	return (
		<div className={styles.container}>
			<Header />
			<Cover />
			<Cards />
			{recentTransactions &&
				recentTransactions.map((transaction, index) => {
					console.log(transaction)
					return (
						<div key={index} className={styles.recentTransactionsList}>
							<div className={styles.transactionCard}>
								<p>From: {transaction.attributes.from_address}</p>
								<p>To: {transaction.attributes.to_address} </p>
								<p>
									Hash:{' '}
									<a
										target={'_blank'}
										rel="noopener noreferrer"
										href={`https://goerli.etherscan.io/tx/${transaction.attributes.hash}`}
									>
										{transaction.attributes.hash.slice(0, 10)}
									</a>
								</p>
								<p>Gas: {transaction.attributes.gas}</p>
							</div>
						</div>
					)
				})}
		</div>
	)
}

export default Main
