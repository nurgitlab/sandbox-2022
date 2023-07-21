import {FC, useCallback, useState} from "react";
import Cell from "../Cell/Cell";

const rows = 5, columns = 7

type ICell = {
    isFlagged: boolean;
    isVisible: boolean;
    value: number;
}

type IMatrix = Array<Array<ICell>>

export const Board: FC = () => {
    const [matrix, setMatrix] = useState<IMatrix>(
        Array(rows).fill(Array(columns).fill(null)).map(line => line.map(() => {
            return {
                isFlagged: false,
                isVisible: false,
                value: 0
            }
        }))
    )

    const leftHandler = useCallback((e, row, column) => {
        e.preventDefault();
        setMatrix(matrix.map((line, i) =>
            line.map((el, j) => {
                if (i === row && j === column) {
                    console.log(e.type)
                    if (e.type === 'click') {el.isVisible=true} else {
                        el.isVisible=false
                    }
                }

                return el
            })
        ))

        console.log(row, column, matrix)
    }, [])

    return (
        <div>
            {
                matrix.map((line, i) => (
                    <div style={{display: 'flex'}}>
                        {line.map(({isVisible, value, isFlagged}, j) =>
                            <Cell
                                isVisible={isVisible}
                                isFlagged={isFlagged}
                                value={value}
                                row={i}
                                column={j}
                                onClick={leftHandler}
                                onContextMenu={leftHandler}
                            />
                        )}
                    </div>
                ))
            }
        </div>
    )
}