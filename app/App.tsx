
import { Suspense } from 'react'
import './App.css'
import { HomeMainScreen } from './features/Home/screens/HomeMainScreen'

function App() {

	return (
		<Suspense>
			<HomeMainScreen />
		</Suspense>
	)
}

export default App
