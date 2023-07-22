import {MouseEvent} from "react";

export interface ICellProps {
    isFlagged: boolean;
    isVisible: boolean;
    value: number;
    row: number;
    column: number;
    onClick: (e: MouseEvent, row: number, column: number, ) => void;
    onContextMenu: (e: MouseEvent, row: number, column: number, ) => void;
}

export interface ICell {
    isFlagged: boolean;
    isVisible: boolean;
    value: number;
}