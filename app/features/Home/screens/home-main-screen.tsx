import { useNavigate } from 'react-router'
import styles from './homeMainScreen.module.css'
import { isValidPublicPath } from '../../../router/routes'
import { EthosAtom } from '../../../ethos-components/ethos-atom'
import { LayersNames } from '../../../ethos-components/comunications-layers/layers-protocol'
import { useMemo } from 'react'
import { useAppSelector } from '../../../store/root'

const menu = ["galery", "/", "xtrx", "galery", "/", "xtrx", "galery", "/", "xtrx", "galery", "/", "xtrx", "galery", "/", "xtrx"]

export const HomeMainScreen = () => {

	const navigation = useNavigate()

	const { registerElementsIds } = useAppSelector(state => state.noRush)

	const links = useMemo(() => {
		return menu?.map((link, index) => (
			<EthosAtom
				key={index}
				children={(
					<h1 className={styles.text}>{link}</h1>
				)} 
				onAction={() => {
					if(isValidPublicPath(link))navigation(link)
				}}
				model={LayersNames.NO_RUSH}
			/>
		))
	}, [registerElementsIds?.length])

	return (
		<div className={styles.container}>
			<h1 className={styles.title}>NO SCRXLL</h1>

			<div className={styles.links}>
				{links}
			</div>

			<div className={styles.cursor}></div>

		</div>
	)

}
