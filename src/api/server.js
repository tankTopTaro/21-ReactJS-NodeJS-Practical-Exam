import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 5050;

app.use(cors());
app.use(express.json());

// Calculate the winner of the game
function calculateWinner (squares) {
    // Winning Patterns
    const lines = [
        // Vertical
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        // Horizontal
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        // Diagonal
        [0, 4, 8],
        [2, 4, 6],
    ]
    
    // Check each possible winning combination
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i]

        // If the cell contain the same symbol and it's not null, return the symbol
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a]
        }

        // If all the squares are filled and there is no winner, return 'Draw'
        if (squares.every((square) => square !== null)) {
            return 'Draw';
        }
    }

    // If there is no winner of draw, return null
    return null
}

// Endpoint to handle calculation of the winner
app.post('/api/calculateWinner', (req, res) => {
    const squares = req.body.squares            // Get the squares array from the request body
    const winner = calculateWinner(squares)     // Call the calculateWinner function
    res.json({winner})                          // Send the winner as JSON response
})

// Start the server
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`); 
});