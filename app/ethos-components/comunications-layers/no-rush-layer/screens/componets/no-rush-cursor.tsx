import { forwardRef, useRef, useEffect } from 'react'
import styles from './no-rush-cursor.module.css'

type Props = {

}
export const NoRushCursor = forwardRef<HTMLElement, Props>((props,ref) => {

    const cursorRef = useRef<HTMLDivElement>(null)


    const handleMouseMove = (event: MouseEvent) => {
        if (ref && cursorRef?.current) {
            //@ts-ignore
            const parentRect = ref.current.getBoundingClientRect()
            const cursorRect = cursorRef?.current?.getBoundingClientRect()

            const offsetX = event.clientX - parentRect.left - cursorRect.width / 2
            const offsetY = event.clientY - parentRect.top - cursorRect.height / 2
            cursorRef.current.setAttribute('style', `
                top: ${offsetY}px;
                left: ${offsetX}px;
                opacity: 1;
            `)
        }
    }

    const handleMouseLeave = () => {
        if (ref && cursorRef?.current) {
            cursorRef.current.setAttribute('style', `
                opacity: 0;
            `)
        }
    }

    useEffect(() => {
        //@ts-ignore
        ref?.current?.addEventListener('mousemove', handleMouseMove)
        //@ts-ignore
        ref?.current?.addEventListener('mouseleave', handleMouseLeave)

        return () => {
            //@ts-ignore
            ref?.current?.removeEventListener('mousemove', handleMouseMove)
            //@ts-ignore
            ref?.current?.removeEventListener('mouseleave', handleMouseLeave)
        }
    }, [])


    return (
        <div
            ref={cursorRef}
            className={styles.cursor}
        ></div>
    )
})