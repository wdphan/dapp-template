import { ConnectButton } from 'web3uikit'
import { useContext, useState } from 'react'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from 'assets/logo.png'
import full_logo from 'assets/full_logo.png'
import { FaBox } from 'react-icons/fa'
import { BsFillBookmarkFill } from 'react-icons/bs'
import { BsFillPersonFill } from 'react-icons/bs'
import { AiOutlineHistory } from 'react-icons/ai'
import { DroppContext } from '../context/DroppContext'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { CgMenuGridO } from 'react-icons/cg'

const Sidebar = () => {
	const styles = {
		container: `mt-[53rem] ml-8 h-[100vh] w-[350px] flex flex-col items-center bg-[#1B1C2C] text-white static rounded-xl absolute`,
		profile: `w-11/12 py-16 flex flex-col justify-center items-center rounded-3xl bg-gradient-to-t bg-[#29283D] mt-[40px] mb-[50px] border-2 border-[#29283D] `,
		profilePicContainer: `flex rounded-full items-center justify-center w-full h-full mb-5`,
		profilePic: `rounded-full object-cover`,
		welcome: ` text-md mb-2 font-bold text-2xl text-white`,
		walletAddress: `text-xl flex w-full justify-center font-extrabold`,
		menu: `flex flex-col w-full h-full px-10 gap-10`,
		menuItem: `flex items-center text-lg font-bold cursor-pointer gap-2`,
		DroppLogo: `mr-4 flex object-cover`,
		companyName: `text-lg font-bold flex flex-1 pl-10 items-center mt-[20px] pl-2`,
		usernameInput: `bg-transparent border-white border-2 rounded-lg w-[80%] py-2 px-4 text-lg mt-[20px] placeholder:text-white focus:outline-none flex justify-center items-center text-white`,
		username: `flex items-center w-full justify-center`,
		setNickname: `text-lg font-bold flex flex-1 items-center mt-[20px] mb-[20px] text-white`,
	}

	const { isAuthenticated, buyTokens, getBalance, nickname, setNickname, username, handleSetUsername } =
		useContext(DroppContext)

	return (
		<div className={styles.container}>
			<div className={styles.profile}>
				{isAuthenticated && (
					<>
						<div className={styles.profilePicContainer}>
							<Image
								src={`https://avatars.dicebear.com/api/avataaars/${username}.svg`}
								alt="profile"
								className={styles.profilePic}
								height={100}
								width={100}
							/>
						</div>
						{!username ? (
							<>
								<div className={styles.username}>
									<input
										type="text"
										placeholder="Username...."
										className={styles.usernameInput}
										value={nickname}
										onChange={e => setNickname(e.target.value)}
									/>
								</div>
								<button className={styles.setNickname} onClick={handleSetUsername}>
									Set Nickname
								</button>
							</>
						) : (
							<div>
								<div className={styles.welcome}>Wecome {username}</div>
							</div>
						)}
					</>
				)}
				<div className="">
					<ConnectButton />
				</div>
			</div>
			<div className={styles.menu}>
				<Link href="/">
					<div className={styles.menuItem}>
						<Image src={logo} height={30} width={30} className={styles.DroppLogo} />
						Dropp Board
					</div>
				</Link>
				<div className={styles.menuItem}>
					<FaBox />
					Collections
				</div>
				<div className={styles.menuItem}>
					<BsFillBookmarkFill />
					Saved
				</div>
				<div className={styles.menuItem}>
					<BsFillPersonFill />
					Profile
				</div>
				<Link href="/History">
					<div className={styles.menuItem}>
						<AiOutlineHistory />
						Transaction History
					</div>
				</Link>
			</div>
		</div>
	)
}
export default Sidebar
