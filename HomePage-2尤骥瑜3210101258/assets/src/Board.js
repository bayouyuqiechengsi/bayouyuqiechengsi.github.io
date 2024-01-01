import { useState } from "react";
import Square from "./Square";
import "./Board.css";

function Board() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  const onBoardClick = (i) => {
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  };

  return (
    <>
      <p>Next Player: {xIsNext ? "X" : "O"}</p>
      <div className="board-container">
        <div className="board-row">
          <Square
            value={squares[0]}
            onSquareClick={() => {
              onBoardClick(0);
            }}
          />
          <Square
            value={squares[1]}
            onSquareClick={() => {
              onBoardClick(1);
            }}
          />
          <Square
            value={squares[2]}
            onSquareClick={() => {
              onBoardClick(2);
            }}
          />
        </div>
        <div className="board-row">
          <Square
            value={squares[3]}
            onSquareClick={() => {
              onBoardClick(3);
            }}
          />
          <Square
            value={squares[4]}
            onSquareClick={() => {
              onBoardClick(4);
            }}
          />
          <Square
            value={squares[5]}
            onSquareClick={() => {
              onBoardClick(5);
            }}
          />
        </div>
        <div className="board-row">
          <Square
            value={squares[6]}
            onSquareClick={() => {
              onBoardClick(6);
            }}
          />
          <Square
            value={squares[7]}
            onSquareClick={() => {
              onBoardClick(7);
            }}
          />
          <Square
            value={squares[8]}
            onSquareClick={() => {
              onBoardClick(8);
            }}
          />
        </div>
      </div>
    </>
  );
}

export default Board;
