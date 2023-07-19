import { HeaderButton } from './Header.components/Button/Header-Button'
import styles from './Header.module.scss'
import logo from '../../img/logo.svg'

export const Header = () => {
    return (
        <div
            className={styles.Container}
        >
            <HeaderButton text='About'/>
            <HeaderButton text='About'/>
            <HeaderButton text='About'/>
            <HeaderButton text='About'/>

            <img
                className={styles.Logo}
                src={logo}
            />

            <HeaderButton text='About'/>
            <HeaderButton text='About'/>
            <HeaderButton text='About'/>
            <HeaderButton text='About'/>
        </div>
    )
}