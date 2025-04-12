import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/root";
import { NoScrollGalerySlice } from "../store/NoScrollGalerySlice/NoScrollGalerySlice";

export const useGaleryNavigation = () => {
	const dispatch = useAppDispatch()
	const [currentElement, setCurrentElement] = useState(0);
	const elementsData = useAppSelector((state) => state.noScrollGalery.galery?.elements);

	useEffect(() => {
		if (elementsData?.length === 0 || !elementsData) {
			dispatch(NoScrollGalerySlice.actions.setConnectionStatus("loading"));
			dispatch(NoScrollGalerySlice.actions.getElements());
		}
	}, [])

	const navigatePrevious = () => {
		setCurrentElement((prev) => prev - 1);
	}

	const navigateNext = () => {
		setCurrentElement((prev) => prev + 1);
	}

	const move = (index: number) => setCurrentElement(index)

	return {
		currentElement,
		elementsData,
		navigatePrevious,
		navigateNext,
		move
	}	

}
