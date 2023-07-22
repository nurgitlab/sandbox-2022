import {FC, useCallback, useState} from "react";
import Cell from "../Cell/Cell";
import {useGenerateBoard} from "../../hooks/useGenerateBoard";

const rows = 10, columns = 20, countOfBombs = 15

type ICell = {
    isFlagged: boolean;
    isVisible: boolean;
    value: number;
}

interface IBoardProps {
    isPlay: boolean,
    setIsPlay: () => void
}


export const Board: FC<IBoardProps> = ({isPlay, setIsPlay}) => {
    const [matrix, clickHandler] = useGenerateBoard<[ICell[][], () => void]>(rows, columns, countOfBombs, setIsPlay, isPlay)

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
                                onClick={clickHandler}
                                onContextMenu={clickHandler}
                            />
                        )}
                    </div>
                ))
            }
        </div>
    )
}