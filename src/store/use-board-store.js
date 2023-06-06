import {create} from 'zustand'
import {boardMatrixInitial} from "../board/board-matrix";

export const useBoardStore = create((set, get) => ({
    board: [
        [NaN, NaN, 1, NaN, NaN, NaN, 2, NaN, NaN],
        [NaN, 1, NaN, 1, NaN, 2, NaN, 2, NaN],
        [1, NaN, 1, NaN, 0, NaN, 2, NaN, 2],
        [NaN, 1, NaN, 1, NaN, 2, NaN, 2, NaN],
        [NaN, NaN, 1, NaN, NaN, NaN, 2, NaN, NaN]
    ],
    beforeBoard: [],
    positionSelected: {
        col: '',
        row: '',
        token: ''
    },
    possiblesMoves: [[], []],
    updateBoard: (updatedBoard) => set({
        board: updatedBoard,
        possiblesMoves: '',
        positionSelected: {
            col: '',
            row: '',
            token: ''
        }
    }),
    resetBoard: () => set({board: boardMatrixInitial}),
    setPossibleMoves: (moves) => set({possiblesMoves: moves}),
    setPositionSelected: (positionSelected) => set({positionSelected})
}))
