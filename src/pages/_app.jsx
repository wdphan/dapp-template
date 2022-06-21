import '../styles/globals.css'
import { DroppProvider } from '../context/DroppContext'
import { MoralisProvider } from 'react-moralis'
import { ModalProvider } from 'react-simple-hook-modal'

function MyApp({ Component, pageProps }) {
	return (
		<MoralisProvider
			serverUrl={process.env.NEXT_PUBLIC_MORALIS_SERVER}
			appId={process.env.NEXT_PUBLIC_MORALIS_APP_ID}
		>
			<DroppProvider>
				<ModalProvider>
					<Component {...pageProps} />
				</ModalProvider>
			</DroppProvider>
		</MoralisProvider>
	)
}

export default MyApp
