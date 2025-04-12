import { GaleryElement } from "./components/GaleryElement/GaleryElement";
import { GaleryElement as GaleryElementType, NoScrollGalerySlice } from "../store/NoScrollGalerySlice/NoScrollGalerySlice";
import { useAppDispatch, useAppSelector } from "../../../store/root";
import { FC, Suspense, useEffect } from "react";
import { useGaleryNavigation } from "../hooks/useGaleryNavigation";


export const MainGaleryScreen: FC = () => {

    const { elementsData, currentElement, move} = useGaleryNavigation()
   
    const elements = elementsData?.map((element: GaleryElementType , index: number) => (
        <GaleryElement key={element.id} {...element} index={currentElement} move={move}/>
    ));

    return (
        <Suspense fallback={<div>Loading...</div>}>
            {elements?.[currentElement]}
        </Suspense>
    )
}