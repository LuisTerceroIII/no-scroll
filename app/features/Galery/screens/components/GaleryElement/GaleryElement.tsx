
import { useAppSelector } from "../../../../../store/root";
import { GaleryElement as GaleryElementType } from "../../../store/NoScrollGalerySlice/NoScrollGalerySlice";
import styles from "./galeryElement.module.css"

export const GaleryElement = (props: GaleryElementType & { index: number, move: (index: number) => void }) => {
    
    const { description, backgroundColor, index, move } = props;

    const elementsData = useAppSelector((state) => state.noScrollGalery.galery?.elements);

    return (
        <div 
            className={styles.elementContainer} 
            style={{ backgroundColor, zIndex: index }}>
            <h1 className={styles.text}>{description}</h1>
        </div>
    )
}