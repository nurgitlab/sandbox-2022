import styles from './Header-Button.module.scss'

export const HeaderButton = ({ children }) => {
    return (
        <div className={styles.Container}>
            {children}
        </div>
    )
}