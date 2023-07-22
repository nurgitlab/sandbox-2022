import {ICellProps} from "../components/Cell/Cell.types";

type IMakeVisible = (matrix: ICellProps[][], row: number, column: number) => ICellProps[][]

export const makeVisible: IMakeVisible = (matrix, row, column) => {
    const visited = new Set()

    function rec(x, y) {
        if (!(matrix[x] && matrix[x][y])) return;
        if (visited.has(`${x}-${y}`)) return;
        visited.add(`${x}-${y}`)

        matrix[x][y].isVisible = true

        if (matrix[x][y].value === 0) {
            for (let i = x - 1; i <= x + 1; i++) {
                for (let j = y - 1; j <= y + 1; j++) {
                    rec(i, j)
                }
            }
       }
    }

    rec(row, column)
    return matrix
}