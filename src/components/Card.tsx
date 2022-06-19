import React, { useContext } from 'react'
import { FaCoins } from 'react-icons/fa'
import { AmazonContext } from '../context/AmazonContext'
import Image from 'next/image'

const Card = ({ item }) => {
	const styles = {
		cardContainer: `flex flex-col bg-[#29283D] items-center w-[325px] h-[450px] pt-2 rounded-xl`,
		card: ` items-center justify-center items-center w-rounded-3xl flex cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl overflow-hidden shadow-xl border-4 border-[#29283D] rounded-xl`,
		cardTitle: `text-md font-bold flex w-full flex-1 w-[250px] justify-start ml-[0px]`,
		price: `text-md font-bold flex justify-start`,
		coins: `ml-[10px] mt-[4px] text-[#F28E54]`,
	}
	const { buyAsset } = useContext(AmazonContext)
	return (
		<div className={styles.cardContainer} onClick={() => buyAsset(item.price, item)}>
			<div className={styles.card}>
				<Image src={item.src} className="object-cover object-center" width={300} height={350} />
			</div>
			<div className="flex flex-col items-start justify-center w-full mt-4 ml-8">
				<div className={styles.cardTitle}>{item.name}</div>
				<div className={styles.price}>
					{item.price} DC <FaCoins className={styles.coins} />
				</div>
			</div>
		</div>
	)
}

export default Card
