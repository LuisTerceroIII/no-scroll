import './App.css'
import { MainGaleryScreen } from './features/Galery/screens/MainGaleryScreen'
import { Provider } from 'react-redux'
import { store } from './store/root'

function App() {
	return (
		<Provider store={store}>
			<MainGaleryScreen />
		</Provider>
	)
}

export default App
