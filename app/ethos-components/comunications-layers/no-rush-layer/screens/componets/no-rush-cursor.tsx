import { forwardRef, ForwardedRef, useRef, useEffect } from 'react'
import styles from './no-rush-cursor.module.css'

type Props = {

}
export const NoRushCursor = forwardRef<HTMLElement, Props>((props,ref) => {

    const cursorRef = useRef<HTMLDivElement>(null)


    const handleMouseMove = (event: MouseEvent) => {
        if (ref && cursorRef?.current) {
            console.log("asdasda")
           cursorRef?.current?.setAttribute('style', `
                top: ${event.clientY-cursorRef?.current?.getBoundingClientRect().height}px;
                left: ${event.clientX-cursorRef?.current?.getBoundingClientRect().width}px;
                opacity: 1;
                `)
        }
    }

    useEffect(() => {
        //@ts-ignore
        ref?.current?.addEventListener('mousemove', handleMouseMove)
        return () => {
            //@ts-ignore
            ref?.current?.removeEventListener('mousemove', handleMouseMove)
        }
    }, [])


    return (
        <div
            ref={cursorRef}
            className={styles.cursor}
        ></div>
    )
})