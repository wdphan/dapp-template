import { FC } from 'react'
import { BookOpenIcon, CodeIcon, ShareIcon } from '@heroicons/react/outline'
import Sidebar from '../components/Sidebar.jsx'
import Main from '../components/Main.jsx'

const styles = {
	container: `h-full w-full flex flex-row bg-[#1B1C2C] text-white`,
	sidebar: 'w-full flex flex-row',
}

export default function Home() {
	return (
		<div className={styles.container}>
			{/* <Sidebar /> */}
			<Main />
		</div>
	)
}
