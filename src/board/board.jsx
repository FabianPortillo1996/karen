import {useBoardStore} from "../store/use-board-store";
import './styles.css';
import Token from "../token/token";

const Board = () => {
    const {board} = useBoardStore();

    return board.map((row, indexRow) => <div className={'row-board'}>
        {row.map((token, indexCol) => <Token
            indexRow={indexRow}
            indexCol={indexCol}
            token={token}/>)}
    </div> )
}

export default Board;
