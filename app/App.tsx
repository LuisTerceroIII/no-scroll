
import { Suspense } from 'react'
import './App.css'
import { HomeMainScreen } from './features/home/screens/home-main-screen'

function App() {

	return (
		<Suspense>
			<HomeMainScreen />
		</Suspense>
	)
}

export default App
