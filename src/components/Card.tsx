import React, { useContext } from 'react'
import { FaCoins } from 'react-icons/fa'
import { DroppContext } from '../context/DroppContext'
import Image from 'next/image'

const Card = ({ item }) => {
	const styles = {
		cardContainer: `flex flex-col bg-[#1B1C2C] items-center w-[325px] h-[450px] pt-2 rounded-xl border-2 border-[#29283D] pb-2`,
		card: ` items-center justify-center items-center w-rounded-3xl flex cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl overflow-hidden shadow-xl rounded-xl `,
		price: `text-md font-bold flex items-center bg-[#29283D] w-[300px] h-[60px] rounded-md`,
		coins: `ml-[10px] mt-[4px] text-[#F28E54]`,
	}
	const { buyAsset } = useContext(DroppContext)
	return (
		<div className={styles.cardContainer} onClick={() => buyAsset(item.price, item)}>
			<div className={styles.card}>
				<Image src={item.src} className="object-cover object-center" width={300} height={350} />
			</div>
			<div className="flex flex-col items-center justify-center w-full mt-4">
				<div className="text-lg font-bold flex w-full flex-1 ml-12 mb-4">{item.name}</div>
				<div className={styles.price}>
					<div className="ml-4 flex flex-row ">
						{item.price} DC <FaCoins className={styles.coins} />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Card
