import {useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState} from "react";
import {generateBombs} from "../utils/generateBombs";
import {makeVisible} from "../utils/makeVisible";
import {deactivateFlags} from "../utils/deactivateFlags";
import {checkWin} from "../utils/checkWin";

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
    flags: number
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

        mat = mat.map((line, i) => line.map((el, j) => {
            if (el.value === 0) {
                let count = 0

                for (let k = i - 1; k<= i + 1; k++) {
                    for (let l = j - 1; l <= j + 1; l++) {
                        if (mat[k] && mat[k][l] && mat[k][l].value === -1) count++
                    }
                }
                el.value = count
            }

            return el
        }))

        return mat
    }, [isPlay])

    const [matrix, setMatrix] = useState<ICell[][]>(initMatrix);
    const [flags, setFlags] = useState(countOfBombs);
    const [isWin, setIsWin] = useState(false)

    const refFlags = useRef(countOfBombs)
    useEffect(() => {
        setFlags(refFlags.current)
    }, [refFlags.current])

    useEffect(()=> {
        if (isPlay) {
            setMatrix(initMatrix)
            refFlags.current = countOfBombs
            setIsWin(false)
        }
    }, [isPlay])

    const clickHandler = useCallback((e, row, column) => {
        e.preventDefault();
        if (!isPlay) return;

        let currentMatrix = [...initMatrix]

        if (e.type === 'click') {
            currentMatrix[row][column].isVisible = true

            if (currentMatrix[row][column].isFlagged) {
                refFlags.current++
                currentMatrix[row][column].isFlagged = false
            }

            if (currentMatrix[row][column].value === -1) {
                currentMatrix[row][column].value = -2
                setIsPlay(false)
                currentMatrix = currentMatrix.map(line => line.map(el => {
                    el.isVisible = true

                    return el
                }))
            } else if (currentMatrix[row][column].value === 0) {
                currentMatrix = makeVisible(currentMatrix, row, column)

                let [df, nmat]= deactivateFlags(currentMatrix)
                currentMatrix = nmat
                refFlags.current+=df
            }
        } else if (!currentMatrix[row][column].isVisible) {
            if (currentMatrix[row][column].isFlagged) {
                currentMatrix[row][column].isFlagged = false
                refFlags.current++
            } else if (refFlags.current > 0) {
                currentMatrix[row][column].isFlagged = true
                refFlags.current--
            }
        }

        if (refFlags.current === 0 && checkWin(currentMatrix)) {
            setIsWin(true)
            setIsPlay(false)
        } else {
            setIsWin(false)
        }

        setMatrix(currentMatrix)
    }, [isPlay])

    return [matrix, clickHandler, flags, isWin]
}