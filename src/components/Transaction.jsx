import React, { useEffect, useContext } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import moment from 'moment'
import { DroppContext } from '../context/DroppContext'

const Transaction = ({ item }) => {
	const styles = {
		container: ` w-[full] flex flex-col items-center border-[#29283D] border-2 rounded-lg bg-[#1B1C2C] mb-96`,
		top: `flex w-full h-[80px]  p-[20px] pr-[80px] gap-[80px]`,
		topHeaderText: `text lg text-left flex items-center`,
		topHeaderEndText: `text lg flex items-center  flex-row p-[30px]`,
		content: `flex flex-col w-full h-[400px] gap-[20px] p-[20px] flex-1`,
		date: `text-xl font-bold`,
		item: `flex flex-row gap-[20px] w-full`,
		nameContainer: `flex flex-col justify-end`,
		itemName: `text-md font-bold ml-[10px] mb-2`,
		buyAgainBtn: `bg-white font-bold rounded-lg h-[40px] w-[150px] cursor-pointer text-[#1B1C2C] text-center flex items-center justify-center `,
		etherscanBtn: `font-bold rounded-lg h-[40px] w-[150px] cursor-pointer text-white text-center flex items-center justify-center bg-[#1B1C2C]`,
	}

	const { username } = useContext(DroppContext)

	return (
		<>
			{item.map((asset, index) => {
				return (
					<div className={styles.container} key={index}>
						<div className={styles.top}>
							<div className="flex w-full gap-[80px]">
								<div className={styles.topHeaderText}>
									ORDER PLACED <br />
									{moment(asset.purchaseDate).format('MMMM Do YYYY')}
								</div>
								<div className={styles.topHeaderText}>
									TOTAL <br />
									{asset.price} AC
								</div>
								<div className={styles.topHeaderText}>
									SHIP TO <br />
									{username}
								</div>
							</div>
						</div>
						<div className={styles.content}>
							<div className={styles.date}>Bought on {moment(asset.purchaseDate).format('MMMM Do')}</div>
							<div className={styles.item}>
								<Image
									className="object-cover rounded-lg"
									src={asset.src}
									alt="item"
									height={100}
									width={100}
								/>
								<div className={styles.nameContainer}>
									<div className={styles.itemName}>{asset.name}</div>
									<div className="flex flex-row items-center justify-center gap-4 flex-wrap bg-[#29283D] rounded-lg p-5">
										<div className={styles.buyAgainBtn}>Buy it Again</div>
										<Link href={`${asset.etherscanLink}`}>
											<a target="_blank" rel="noopener">
												<div className={styles.etherscanBtn}>Etherscan</div>
											</a>
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				)
			})}
		</>
	)
}

export default Transaction
