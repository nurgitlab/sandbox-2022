import styles from './Header-Button.module.scss'

export const HeaderButton = ({ children }) => {
    return (
        <a className={styles.Container}>
            {children}
        </a>
    )
}