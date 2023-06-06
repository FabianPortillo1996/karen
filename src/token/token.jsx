import {useDrag} from 'react-dnd'
import styles from './styles.css';
import {useEffect} from "react";
import {useBoardStore} from "../store/use-board-store";

const YELLOW = 1;
const BLUE = 2;
const WHITE = 0;

const MOVEMENTS_YELLOW = [[1, 1], [-1, 1]];
const MOVEMENTS_BLUE = [[1, -1], [-1, -1]]

const Token = ({token, indexRow, indexCol}) => {

    const {
        setPossibleMoves,
        possiblesMoves,
        setPositionSelected,
        positionSelected,
        updateBoard,
        board
    } = useBoardStore();

    useEffect(() => {
        if (positionSelected.col === indexCol && positionSelected.row === indexRow) {
            if (token === BLUE) {
                const possibleOnDrag = MOVEMENTS_BLUE
                    .map((movement) => {
                        try {
                            if (board[movement[0] + indexRow][movement[1] + indexCol] === YELLOW)
                                return (movement[0] * 2 + indexRow) + '' + (movement[1] * 2 + indexCol)
                            return (movement[0] + indexRow) + '' + (movement[1] + indexCol)
                        } catch (e) {
                            console.log(e)
                        }
                    });
                setPossibleMoves(possibleOnDrag);
            }
            if (token === YELLOW) {
                const possibleOnDrag = MOVEMENTS_YELLOW
                    .map((movement) => {
                        try {
                            if (board[movement[0] + indexRow][movement[1] + indexCol] === BLUE)
                                return (movement[0] * 2 + indexRow) + '' + (movement[1] * 2 + indexCol)
                            return (movement[0] + indexRow) + '' + (movement[1] + indexCol)
                        } catch (e) {
                            console.log(e)
                        }
                    });
                setPossibleMoves(possibleOnDrag);
            }
        }
    }, [positionSelected]);

    const colorByTypeOfToken = {
        [YELLOW]: 'yellow',
        [BLUE]: 'blue',
        [WHITE]: 'white',
        [NaN]: 'transparent'
    }

    const isPossibleMovement = possiblesMoves.includes(`${indexRow}${indexCol}`)
        && !isNaN(token)
        && positionSelected.token !== token
        && token === WHITE;

    const handleMove = () => {
        if (!isPossibleMovement) {
            setPositionSelected({
                col: indexCol,
                row: indexRow,
                token
            })
            return;
        }
        let newBoard = board;
        newBoard[indexRow][indexCol] = positionSelected.token;
        newBoard[positionSelected.row][positionSelected.col] = token;
        updateBoard(newBoard);
    }

    return <div
        onClick={handleMove}
        className={'token'}
        role="Handle"
        style={{backgroundColor: isPossibleMovement ? 'green' : colorByTypeOfToken[token]}}
    />
}

export default Token;
