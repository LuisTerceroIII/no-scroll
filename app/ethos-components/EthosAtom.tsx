import React, { lazy, Suspense, useEffect } from 'react'
import { LayersNames } from './layers-protocol'

interface EthosAtomProps<Layer extends LayersNames> {
	children: React.ReactNode
	model: Layer
}

const NoRushAtom = lazy(() => import('./NoRush'))
const MoveInTimeAtom = lazy(() => import('./MoveInTime'))

export const EthosAtom = <Layer extends LayersNames>(props: EthosAtomProps<Layer>) => {

	const { children, model } = props

	const [Atom, setAtom] = React.useState<Layer>(model)

	useEffect(() => {
		setAtom(model)
	}, [model])

	return (
		<Suspense fallback={<div>Cargando ...</div>}>
			{Atom === LayersNames.NO_RUSH && <NoRushAtom />}
			{Atom === LayersNames.MOVE_IN_TIME && <MoveInTimeAtom />}
		</Suspense>
	)
}
