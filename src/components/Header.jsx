import React, { useContext, useState } from 'react'
import { CgMenuGridO } from 'react-icons/cg'
import full_logo from 'assets/full_logo.png'
import Image from 'next/image'
import { IoMdSearch } from 'react-icons/io'
import { DroppContext } from '../context/DroppContext'
import { FaCoins } from 'react-icons/fa'
import { ModalProvider, Modal, useModal, ModalTransition } from 'react-simple-hook-modal'
import 'react-simple-hook-modal/dist/styles.css'
import BuyModal from './BuyModal'
import Sidebar from './Sidebar.jsx'
import Link from 'next/link'

const Header = () => {
	const styles = {
		container: `h-[60px] w-full flex items-center gap-5 px-16 z-50`,
		logo: `flex items-center ml-50px] cursor-pointer flex-1`,
		search: `p-[25px] mr-[30px] w-[800px] h-[40px] rounded-xl flex flex items-center border border-[#29283D]`,
		searchInput: `bg-transparent focus:outline-none border-none flex-1 items-center flex font-bold`,
		menu: `flex items-center gap-6 `,
		menuItem: `flex items-center text-md font-bold cursor-pointer z-50`,
		coins: `ml-[10px] text-[#F28E54]`,
	}

	const [isShown, setIsShown] = useState(true)

	const handleClick = event => {
		// toggle shown state
		setIsShown(current => !current)
	}

	const { balance, buyTokens, getBalance } = useContext(DroppContext)
	const { openModal, isModalOpen, closeModal } = useModal()

	return (
		<ModalProvider>
			<div className={styles.container}>
				<div className={styles.logo}>
					<Image src={full_logo} alt="amazon" height={70} width={180} className="object-cover" />
				</div>
				<div className={styles.search}>
					<input type="text" placeholder="Search Your Assets..." className={styles.searchInput} />
					<IoMdSearch fontSize={20} />
				</div>
				<div className={styles.menu}>
					<div className={styles.menuItem}>New Releases</div>
					<div className={styles.menuItem}>Featured</div>
					{balance ? (
						<div className={(styles.balance, styles.menuItem)} onClick={openModal}>
							{balance}
							<FaCoins className={styles.coins} />
							<Modal isOpen={isModalOpen} transition={ModalTransition.SCALE}>
								<BuyModal close={closeModal} buyTokens={buyTokens} />
							</Modal>
						</div>
					) : (
						<div className={(styles.balance, styles.menuItem)} onClick={openModal}>
							0 DC <FaCoins className={styles.coins} />
							<Modal isOpen={isModalOpen} transition={ModalTransition.SCALE}>
								<BuyModal close={closeModal} buyTokens={buyTokens} />
							</Modal>
						</div>
					)}

					<CgMenuGridO fontSize={30} onClick={handleClick} className="cursor-pointer z-50" />
					{isShown && <Sidebar />}
				</div>
			</div>
		</ModalProvider>
	)
}

export default Header
