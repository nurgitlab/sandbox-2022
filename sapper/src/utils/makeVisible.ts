import {ICellProps} from "../components/Cell/Cell.types";

type IMakeVisible = (matrix: ICellProps[][], row: number, column: number) => ICellProps[][]

export const makeVisible: IMakeVisible = (matrix, row, column) => {

    return matrix
}