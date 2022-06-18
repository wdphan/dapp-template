import { FC } from 'react'
import { APP_NAME } from '@/lib/consts'
import { BookOpenIcon, CodeIcon, ShareIcon } from '@heroicons/react/outline'
import Sidebar from '../components/Sidebar'
import Main from '../components/Main'

const styles = {
	container: `h-full w-full flex flex-row bg-[#1B1C2C] text-white`,
	sidebar: 'w-full flex flex-row',
}

export default function Home() {
	return (
		<div className={styles.container}>
			<Sidebar />
			<Main />
		</div>
	)
}
