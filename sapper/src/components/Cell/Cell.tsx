import {FC, memo} from "react";
import {ICellProps} from "./Cell.types";
import styles from "./Cell.module.scss"

const Cell: FC<ICellProps>= ({
    isVisible,
    isFlagged,
    value,
    row,
    column,
    onClick,
    onContextMenu,
}) => {
    console.log(`Rendered: ${row}  ${column}`)
    return (
        <div
            className={styles.Container}
            onContextMenu={(e) => onClick(e, row, column)}
            onClick={(e) => onClick(e, row, column)}
        >
            {isVisible && value}
        </div>
    )
}

export default memo(Cell)