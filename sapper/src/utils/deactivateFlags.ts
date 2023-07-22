import {ICell} from "../components/Cell/Cell.types";

type IDeactivateFlags = (matrix: ICell[][]) => [number, ICell[][]]

export const deactivateFlags:IDeactivateFlags = (matrix) => {
    let count = 0

    matrix = matrix.map(line => line.map(el => {
        if (el.isFlagged && el.isVisible) count++
        el.isFlagged = false
        return el
    }))

    return [count, matrix]
}