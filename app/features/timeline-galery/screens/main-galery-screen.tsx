import { GaleryElement } from "./components/galery-element/galery-element";
import { GaleryElement as GaleryElementType } from "../store/no-scroll-galery-slice/no-scroll-galery-slice";
import { FC, Suspense, useEffect } from "react";
import { useGaleryNavigation } from "../hooks/use-galery-navigation";
import styles from "./main-galery-screen.module.css"
import { Slider, styled } from "@mui/material";
import { addToast, closeAll, ToastProvider } from "@heroui/toast";
import SwapHorizontalCircleIcon from '@mui/icons-material/SwapHorizontalCircle';

const CustomSlider = styled(Slider)({
    height: 8,
    '& .MuiSlider-track': {
        border: 'none',
        height: 8,
        backgroundColor: '#4C949D',
    },
    '& .MuiSlider-thumb': {
        height: 30,
        width: 30,
        backgroundColor: '#4C949D',
        border: '2px solid #4C949D',
        '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
            boxShadow: 'inherit',
        }
    },
    '& .MuiSlider-mark': {
        backgroundColor: '#4C949D',
        height: 17,
        width: 17,
        cursor: "pointer",
        borderRadius: '50%',
        '&.MuiSlider-markActive': {
            opacity: 1,
            backgroundColor: '#4C949D',
        },
    }
});

export const MainGaleryScreen: FC = () => {
    
    const { elementsData, currentElement, move } = useGaleryNavigation()

    const elements = elementsData?.map((element: GaleryElementType, index: number) => (
        <GaleryElement key={element.id} {...element} index={index} move={move} />
    ));

    useEffect(() => {
		addToast({
			title: "MOVE IN TIMELINE",
			description: "Desplázate por las secciones usando la barra de progreso.",
			variant: "flat",
			color: "default",
			icon: <SwapHorizontalCircleIcon />,
			shouldShowTimeoutProgress: true,
			timeout: 4000,
			hideCloseButton: true
		})
        return () => {
			closeAll()
		}
	}, [])

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ToastProvider placement={"top-center"} toastOffset={40} maxVisibleToasts={1} />

            {elements?.[currentElement]}
            <div className={styles.sliderContainer}>
                <CustomSlider
                    getAriaValueText={(value) => `${value}`}
                    defaultValue={0}
                    step={1}
                    min={0}
                    max={(elementsData?.length ?? 1) - 1}
                    marks={elementsData?.map((_, index) => ({
                        value: index,
                        label: ""
                    }))}
                    value={currentElement}
                    onChange={(_, value) => {
                        move(value as number)
                    }}
                />
            </div>
        </Suspense>
    )
}