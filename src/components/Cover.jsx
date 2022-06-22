import React, { useState, useContext } from 'react'
import { DroppContext } from '../context/DroppContext'

const Cover = () => {
	return (
		<div className="w-full flex flex-col justify-center items-center mt-10 relative">
			<img
				src="https://f8n-production-collection-assets.imgix.net/0x8A1f7cc4E1C7cA686BDD7fAC10cC30B850739bE7/4/nft.jpg?q=80&auto=format%2Ccompress&cs=srgb&max-w=1680&max-h=1680"
				alt=""
				class="object-cover h-[50vh] w-11/12 rounded-2xl"
			/>

			<img
				src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSug0VQmhVc2oP2MRT76XRtmF_KMe-DiA09Q_-CQ40XV_1n2TafqILev82YDksGSXp339c&usqp=CAU"
				alt=""
				class="object-cover h-[20vh] rounded-full absolute top-[20rem]"
			/>
			<div className="mt-24 font-bold text-3xl">METAMORPHICS</div>
			<div className="flex flex-row space-x-5 mt-5">
				<div className="mt-1 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 text-lg">
					@metamorphics
				</div>
				<button className="bg-[#29283D] px-4 py-1 rounded-full text-[#A3A4A5] font-bold">0x1614...1d7b</button>
				<button className="bg-[#29283D] text-[#A3A4A5] px-4 py-1 rounded-full font-bold">+1 more</button>
			</div>
			<div className="flex flex-col items-center justify-center text-center text-[#A3A4A5] font-bold">
				<p className="w-5/12 mt-8 mb-8 flex flex-wrap">
					The metamorphics collection consists of artworks obtained by using the art of photography together
					with the art of illustration.
				</p>
				<p className="w-5/12 mb-4">
					In the studies carried out, it is aimed to appeal to the eye by considering the real world and the
					imaginary world together with the phenomena of unlimited creativity.
				</p>
			</div>
			<div className="flex flex-row space-x-5 mt-5">
				<button className="bg-white text-[#29283D] font-bold px-5 py-3 rounded-xl">Follow</button>
				<button className="bg-[#29283D] px-5 py-3 rounded-xl font-bold">Send message</button>
			</div>
		</div>
	)
}

export default Cover
