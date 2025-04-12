
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router";
import { store } from './store/root'
import { Provider } from 'react-redux';
import { publicRoutes } from './router/routes.ts';
import App from './App.tsx';
import { MainGaleryScreen } from './features/Galery/screens/MainGaleryScreen.tsx';



createRoot(document.getElementById('root')!).render(
	<Provider store={store}>
		<BrowserRouter>
			<Routes>
				<Route path={"/"} element={<App />} />
				<Route path={"/galery"} element={<MainGaleryScreen />} />
			</Routes>
		</BrowserRouter>
	</Provider>
)
