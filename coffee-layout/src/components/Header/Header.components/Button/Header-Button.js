import styles from './Header-Button.module.scss'

export const HeaderButton = ({ text }) => {


    return (
        <div className={styles.Container}>
            {text}
        </div>
    )
}