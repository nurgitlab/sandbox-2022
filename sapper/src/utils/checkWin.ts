import {ICellProps} from "../components/Cell/Cell.types";

type ICheckWin = (matrix: ICellProps[][]) => boolean

export const checkWin = (matrix) => {
    let ans = true
    matrix.forEach(line => line.forEach(({isFlagged, value}) => {
        if (value === -1 && !isFlagged) {
            ans = false
        }
    }))

    return ans
}