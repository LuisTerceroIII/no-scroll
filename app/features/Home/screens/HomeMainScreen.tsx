import { NavLink } from 'react-router'
import styles from './homeMainScreen.module.css'
import { isValidPublicPath } from '../../../router/routes'

const menu =  ["galery", "/", "xtrx","galery", "/", "xtrx","galery", "/", "xtrx","galery", "/", "xtrx","galery", "/", "xtrx"]

export const HomeMainScreen = () => {

	const links = menu?.map((link, index) => (
		<NavLink key={index} to={isValidPublicPath(link) ? link : "/"} className={styles.navLink}>
			<h1 className={styles.text}>{link}</h1>
		</NavLink>
	))

	return (
		<div className={styles.container}>
			<h1 className={styles.title}>NO SCRXLL</h1>

			<div className={styles.links}>
				{links}
			</div>

		</div>
	)

}
