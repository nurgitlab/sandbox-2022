import React from 'react';
import styles from "./RectangularButton.module.scss"

function RectangularButton({ children }) {
    return (
        <div className={styles.Container}>
            {children}
        </div>
    );
}

export default RectangularButton;