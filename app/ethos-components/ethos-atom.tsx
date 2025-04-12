import React, { lazy, Suspense } from 'react'
import { LayersNames } from './comunications-layers/layers-protocol'
import { useGenerateId } from './hooks/useGenerateId'

interface EthosAtomProps<Layer extends LayersNames> {
	children: React.ReactNode
	model: Layer
	onAction: () => void
}

const NoRushAtom = lazy(() => import('../ethos-components/comunications-layers/no-rush-layer/screens/no-rush-atom').then(m => ({ default: m.NoRushAtom })))
//const MoveInTimeAtom = lazy(() => import('../ethos-components/comunications-layers/move-in-time-layer/screens/move-in-time-atom'))

export const EthosAtom = <Layer extends LayersNames>(props: EthosAtomProps<Layer>) => {

	const { children, model, onAction } = props

	return (
		<Suspense fallback={<div>Cargando ...</div>}>
			{model === LayersNames.NO_RUSH && <NoRushAtom  children={children} onAction={onAction} timeToComeBack={3} />}
			{/* {Atom === LayersNames.MOVE_IN_TIME && <MoveInTimeAtom children={children} />}*/}
		</Suspense>
	)
}
