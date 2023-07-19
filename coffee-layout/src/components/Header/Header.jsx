import { HeaderButton } from './Header.components/Button/Header-Button'
import styles from './Header.module.scss'
import logo from '../../img/logo.svg'

export const Header = () => {
    return (
        <div
            className={styles.Container}
        >
            <div className={styles.Buttons}>
                <HeaderButton> Home </HeaderButton>
                <HeaderButton> About </HeaderButton>
                <HeaderButton> Menu </HeaderButton>
                <HeaderButton> Reservation </HeaderButton>
            </div>

            <img
                    className={styles.Logo}
                    src={logo}
                />
            
            <div className={styles.Buttons}>
                <HeaderButton> Pages </HeaderButton>
                <HeaderButton> Shop </HeaderButton>
                <HeaderButton> Contact </HeaderButton>
                <HeaderButton> <span class="material-symbols-outlined">search</span> </HeaderButton>
                <HeaderButton> <span class="material-symbols-outlined">redeem</span> </HeaderButton>
            </div>
        </div>
    )
}