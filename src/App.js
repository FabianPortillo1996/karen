import './App.css';
import {HTML5Backend} from 'react-dnd-html5-backend'
import {DndProvider} from 'react-dnd'
import Board from "./board/board";
import {Button, ButtonGroup} from "@mui/material";
import {useBoardStore} from "./store/use-board-store";
import {boardMatrixInitial} from "./board/board-matrix";

function App() {
    const {board, updateBoard} = useBoardStore();
    return (
        <DndProvider backend={HTML5Backend}>
            <div className="App" style={{backgroundColor: 'black'}}>
                <Board/>
                <ButtonGroup variant="text" aria-label="text button group" style={{marginTop: '3rem'}}>
                    <Button
                        onClick={() => {
                            updateBoard(boardMatrixInitial)}}>Reiniciar</Button>
                </ButtonGroup>
            </div>
        </DndProvider>
    );
}

export default App;
