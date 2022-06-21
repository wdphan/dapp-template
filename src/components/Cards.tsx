import React, { useState, useContext, useEffect } from 'react'
import Card from './Card'
import { DroppContext } from '../context/DroppContext'

const Cards = () => {
	const styles = {
		container: `h-full w-full flex flex-col items-center mt-10`,
		title: `text-xl font-bold mb-[20px] text-3xl`,
		cards: `flex items-center justify-center flex-wrap gap-[20px]`,
	}
	const { assets } = useContext(DroppContext)

	return (
		<div className={styles.container}>
			<div className={styles.cards}>
				<div className={styles.cards}>
					{assets.map(item => {
						let asset = item.attributes

						return <Card key={item.id} item={item.attributes} />
					})}
				</div>
			</div>
		</div>
	)
}

export default Cards
