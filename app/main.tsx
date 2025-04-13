
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router";
import { store } from './store/root'
import { Provider } from 'react-redux';
import App from './App.tsx';
import { MainGaleryScreen } from './features/timeline-galery/screens/main-galery-screen.tsx';
import { HeroUIProvider } from '@heroui/system';
import { MoveInLayersMainScreen } from './ethos-components/comunications-layers/move-in-layers/screens/move-in-layers-main-screen.tsx';


createRoot(document.getElementById('root')!).render(
	<HeroUIProvider>
		<Provider store={store}>
			<BrowserRouter>
				<Routes>
					<Route path={"/"} element={<App />} />
					<Route path={"/timeline-galery"} element={<MainGaleryScreen />} />
					<Route path={"/move-in-layers"} element={<MoveInLayersMainScreen />} />
				</Routes>
			</BrowserRouter>
		</Provider>
	</HeroUIProvider>
)
