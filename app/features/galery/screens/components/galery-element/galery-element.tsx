
import { GaleryElement as GaleryElementType } from "../../../store/no-scroll-galery-slice/no-scroll-galery-slice";
import styles from "./galeryElement.module.css"

export const GaleryElement = (props: GaleryElementType & { index: number, move: (index: number) => void }) => {
    
    const { description, backgroundColor, index, move } = props;

    return (
        <div 
            className={styles.elementContainer} 
            style={{ backgroundColor, zIndex: index }}>
            <h1 className={styles.text}>{description}</h1>
        </div>
    )
}