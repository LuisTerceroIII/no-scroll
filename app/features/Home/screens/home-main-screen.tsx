import { useNavigate } from 'react-router'
import styles from './home-main-screen.module.css'
import { isValidPublicPath } from '../../../router/routes'
import { EthosAtom } from '../../../ethos-components/ethos-atom'
import { LayersNames } from '../../../ethos-components/comunications-layers/layers-protocol'
import { useEffect, useMemo } from 'react'
import { useAppSelector } from '../../../store/root'
import { addToast } from "@heroui/toast";
import { ToastProvider } from "@heroui/toast";
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';

const menu = ["timeline-galery", "/", "xtrx", "galery", "/", "xtrx", "galery", "/", "xtrx", "timeline-galery", "/", "xtrx", "timeline-galery", "/", "xtrx"]

export const HomeMainScreen = () => {

	const navigation = useNavigate()

	const { registerElementsIds } = useAppSelector(state => state.noRush)

	useEffect(() => {
		addToast({
			title: "NO RUSH",
			description: "Para simular un clic, posiciona el cursor sobre el elemento, espera un instante y se activará el clic. Tómate tu tiempo para dar el siguiente paso.",
			variant: "flat",
			color: "primary",
			icon: <SelfImprovementIcon />,
			shouldShowTimeoutProgress: true,
			timeout: 10000,
			hideCloseButton: true

		})
	}, [])

	const links = useMemo(() => {
		return menu?.map((link, index) => (
			<EthosAtom
				key={index}
				children={(
					<h1 className={styles.text}>{link}</h1>
				)}
				onAction={() => {
					if (isValidPublicPath(link)) navigation(link)
				}}
				model={LayersNames.NO_RUSH}
			/>
		))
	}, [registerElementsIds?.length])

	return (

			<div className={styles.container}>
				<ToastProvider placement={"top-center"} toastOffset={40} maxVisibleToasts={1}/>
				<h1 className={styles.title}>NO SCRXLL</h1>
				<div className={styles.links}>
					{links}
					</div>
				<div className={styles.cursor}></div>
			</div>
	)

}
