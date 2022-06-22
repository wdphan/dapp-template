import React, { useContext, useEffect } from 'react'
import Sidebar from '../components/Sidebar.jsx'
import Header from '../components/Header'
import { DroppContext } from '../context/DroppContext'

import Transaction from '../components/Transaction'

const History = () => {
	const styles = {
		container: `h-full w-full flex flex-row bg-[#1B1C2C]`,
		main: `w-full h-full flex flex-col mt-[50px] text-white`,
		tableContainer: `w-full h-full flex flex-col p-[100px] justify-center`,
		pageTitle: `text-2xl font-bold text-left mt-[50px] mb-[30px] w-full`,
		transactions: `flex gap-[50px] flex-row flex-wrap w-full`,
	}
	const { ownedItems } = useContext(DroppContext)
	// useEffect(() => {
	//   console.log(ownedItems)
	// }, [])

	return (
		<div className={styles.container}>
			{/* <Sidebar /> */}

			<div className={styles.main}>
				<Header />
				<div className={styles.tableContainer}>
					{ownedItems ? (
						<div className={styles.pageTitle}>Purchase History</div>
					) : (
						<div className={styles.pageTitle}>No Purchase History</div>
					)}
					<div className={styles.transactions}>
						{ownedItems.map((item, index) => {
							return <Transaction key={index} item={item} index={index} />
						})}
					</div>
				</div>
			</div>
		</div>
	)
}

export default History
