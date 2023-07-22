import {IValueProps} from "./Value.types";
import {FC} from "react";
import styles from "./Value.module.scss"

export const Value: FC<IValueProps> = ({value}) => {

    if (value === -2) {
        return (
            <div className={`${styles.Container} ${styles.Bomb} ${styles.Active}`}/>
        )
    }

    if (value === -1) {
        return (
            <div className={`${styles.Container} ${styles.Bomb}`}/>
        )
    }

    if (value === 0) {
        return (
            <div className={styles.Container}/>
        )
    }
    return (
        <div className={styles.Container}>
            {value}
        </div>
    )
}