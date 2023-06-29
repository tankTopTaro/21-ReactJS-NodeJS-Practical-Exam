import React, { useState } from 'react'
import Square from './Square'

/* This component represents the game board 
    'calculateWinner'   => a function that determines the winner of the game
    'winner'            => the current winner of the game
    'squares'           => an array that represents the state of each cell on the board
    'setSquares'        => a function that updates the 'squares' array
    'isNext'            => a boolean indicating which player's turn it is
    'setIsNext'         => a function that update the 'isNext' value

*/
const Board = ({ calculateWinner, winner, squares, setSquares, isNext, setIsNext }) => {

    // Handles the player clicks on the cell
    function playerClick(i) {
        // If the square is already filled or there is a winner, return early
        if (squares[i] || winner) {
            return
        }

        // Creates a copy of the squares arrays
        const nextSquares = squares.slice()

        // Update the next Square based on the current player's turn ('true' === 'X' || 'false' === 'O')
        if (isNext) {
            nextSquares[i] = 'X'
        } else {
            nextSquares[i] = 'O'
        }
        
        // Update the state with the modified nextSquares array and toggle the player's turn
        setSquares(nextSquares)
        setIsNext(!isNext)

        // Calculate if there is a winner after the player's move
        calculateWinner();
    }

    return (
        <>
            {/* Render the Square components for each cell on the board */}
            <div className="grid grid-rows-3 grid-flow-col gap-1">
                <Square value={squares[0]} onPlayerClick={() => playerClick(0)} />
                <Square value={squares[1]} onPlayerClick={() => playerClick(1)} />
                <Square value={squares[2]} onPlayerClick={() => playerClick(2)} />
                <Square value={squares[3]} onPlayerClick={() => playerClick(3)} />
                <Square value={squares[4]} onPlayerClick={() => playerClick(4)} />
                <Square value={squares[5]} onPlayerClick={() => playerClick(5)} />
                <Square value={squares[6]} onPlayerClick={() => playerClick(6)} />
                <Square value={squares[7]} onPlayerClick={() => playerClick(7)} />
                <Square value={squares[8]} onPlayerClick={() => playerClick(8)} />
            </div>
        </>
    )
}

export default Board
