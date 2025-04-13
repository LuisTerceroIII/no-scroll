import { FC } from 'react'
import styles from './move-in-layer-atom.module.css'

interface MoveInLayerAtomProps {
    children: React.ReactNode
}

export const MoveInLayerAtom: FC<MoveInLayerAtomProps> = (props) => {

    const { children } = props

    return (
        <div className={styles.element}>
            {children}
        </div>
    )
}
