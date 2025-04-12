import { MainGaleryScreen } from "../features/Galery/screens/MainGaleryScreen";
import App from "../App";

export const publicRoutes = [
    {
        path: "/",
        element: App
    },
    {
        path: "galery",
        element: MainGaleryScreen
    }
]

export const isValidPublicPath = (path: string) => {
    return publicRoutes.some(route => route.path === path)
}