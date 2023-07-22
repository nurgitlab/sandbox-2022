import {FC, memo} from "react";
import {ICellProps} from "./Cell.types";
import styles from "./Cell.module.scss";
import flag from "../../assets/react.svg"
import {Value} from "../Value/Value";

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
    if (isVisible) {
        return (
            <div
                className={styles.ContainerVisible}
                onContextMenu={(e) => onClick(e, row, column)}
                onClick={(e) => onClick(e, row, column)}
            >
                <Value value={value}/>
            </div>
        )
    } else {
        return (
            <div
                className={styles.Container}
                onContextMenu={(e) => onClick(e, row, column)}
                onClick={(e) => onClick(e, row, column)}
            >
                {isFlagged && <img src={flag}/>}
            </div>
        )
    }

}

export default memo(Cell)