import React, { useEffect, useRef, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../../store/root'
import { NoRushSlice } from '../store/no-rush-slice'
import { useGenerateId } from '../../../hooks/useGenerateId'
import styles from './no-rush-atom.module.css'
import { NoRushCursor } from './componets/no-rush-cursor'

interface NoRushAtomProps {
    children: React.ReactNode
    onAction: () => void
    timeToComeBack: number // Time in seconds required to trigger the action
    contextPrefix?: string
}

export const NoRushAtom = (props: NoRushAtomProps) => {

    const { children, onAction, timeToComeBack  } = props

    const dispatch = useAppDispatch()

    const focusElementId = useAppSelector(state => state.noRush.focusElementId)

    // Local timer state
    const [time, setTime] = useState(0)

    const { id: atomId } = useGenerateId({ prefix: "no-rush-element" })

    const resetTime = () => setTime(0)

    const cursorParentRef = useRef<HTMLDivElement>(null)
    const cursorRef = useRef<HTMLDivElement>(null)


    /**
     * Effect: when the timer reaches the target and it's actively running,
     * trigger the `onAction` callback and reset the state.
     */
    useEffect(() => {

        if (time === timeToComeBack && focusElementId === atomId) {
            onAction()
            resetTime()
        }

    }, [time])

    /**
     * Starts the timer only if the channel is available (open).
     * If the channel is closed, the component cannot claim it.
     * 
     * Once activated, the component "owns" the interaction — others should respect this exclusivity.
     */
    const noRushedAction = (event: React.MouseEvent) => {
        resetTime()
        dispatch(NoRushSlice.actions.setFocusElementId(atomId))
        // Start local timer
        const interval = setInterval(() => {
            setTime(prev => prev + 1)
        }, 1000)

        // Cleanup timer when unmounted or re-triggered
        return () => {
            if(time >= timeToComeBack) {
                clearInterval(interval)
                resetTime()
                onAction()
            }
        }
    }

    const onElementDisconnection = () => {
        resetTime()
        dispatch(NoRushSlice.actions.unsetFocusElementId())
    }

    return (
        <div
            ref={cursorParentRef}
            className={styles.element}
            onMouseOver={(event) => noRushedAction(event)} 
            onMouseLeave={onElementDisconnection}
        >
            {children}
            <NoRushCursor ref={cursorParentRef || null} /> 
        </div>
    )
}
