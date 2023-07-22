import {useCallback, useEffect, useMemo, useState} from "react";
import {generateBombs} from "../utils/generateBombs";

type ICell = {
    isFlagged: boolean;
    isVisible: boolean;
    value: number;
}

interface IUseGenerateBoardProps {
    rows: number;
    columns: number;
    countOfBombs: number;
}


type IUseGenerateBoardProps = (
    rows: number,
    columns: number,
    countOfBombs: number,
    setIsPlay: () => void,
    isPlay: boolean
) => [
    matrix: number,
    clickHandler: () => void,
];


export const useGenerateBoard = (rows, columns, countOfBombs, setIsPlay, isPlay): ICell[][] => {
    const initMatrix = useMemo(() => {
        const bombs = generateBombs(rows, columns, countOfBombs)
        let mat = Array(rows).fill(Array(columns).fill(null)).map((line, i) => line.map((_, j) => {
            let value = 0
            if (bombs.find(el => el[0] === i && el[1] === j)) {
                value = -1
            }
            return {
                isFlagged: false,
                isVisible: false,
                value: value
            }
        }))
        //Засунь создание матрицы полностью вот сюда Строка 65
    }), [isPlay])

    console.log(initMatrix)

    const [matrix, setMatrix] = useState<ICell[][]>(initMatrix);

    useEffect(() => {
        if (!isPlay) {
            setMatrix(() => Array(rows).fill(Array(columns).fill(null)).map((line, i) => line.map((_, j) => {
                let value = 0
                if (bombs.find(el => el[0] === i && el[1] === j)) {
                    value = -1
                }
                return {
                    isFlagged: false,
                    isVisible: false,
                    value: value
                }
            })))
            return;
        }

        setMatrix([...initMatrix.map((line, i) => [...line].map((el, j) => {
            el = {...el}
            if (el.value === 0) {
                let count = 0

                for (let k = i - 1; k<= i + 1; k++) {
                    for (let l = j - 1; l <= j + 1; l++) {
                        if (matrix[k] && matrix[k][l] && matrix[k][l].value === -1) count++
                    }
                }
                el.value = count
            }

            return el
        }))])
    }, [isPlay])


    const clickHandler = useCallback((e, row, column) => {
        e.preventDefault();

        if (!isPlay) return;
        setMatrix(matrix.map((line, i) =>
            line.map((el, j) => {
                if (i === row && j === column) {
                    console.log(e.type)
                    if (e.type === 'click') {
                        el.isVisible = true
                        el.isFlagged = false

                        if (el.value === -1) {
                            setIsPlay(false)
                        }
                    } else if (!el.isVisible) {
                        el.isFlagged = !el.isFlagged
                    }
                }

                return el
            })
        ))

        console.log(row, column, matrix)
    }, [isPlay])

    return [matrix, clickHandler]
}