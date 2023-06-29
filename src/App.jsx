import { useEffect, useState } from 'react'
import axios from 'axios'
import Board from './components/Board'

function App() {
  const [isNext, setIsNext] = useState(true)    
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [winner, setWinner] = useState(null)

  // Call the 'calculateWinner' function whenever a 'square' changes
  useEffect(() => {
    calculateWinner()
  }, [squares])

  // Determine the winner in the game by sending a POST request to the server endpoint
  const calculateWinner = async () => {
    try {
      // Send the current state of the game board as a POST request to the server
      const response = await axios.post('http://localhost:5050/api/calculateWinner', {squares})
      // Extract the winner from the response data
      const winner = response.data.winner
      // Set the winner in the application state
      setWinner(winner)
    } catch (error) {
      // Log the error that occurs during the request
      console.log(error)
    }
  }

  // Reset the game board to its initial states
  function resetSquares () {
    setSquares(Array(9).fill(null))
    setIsNext(true)
    setWinner(null)
  }

  return (
    <div className='bg-gray-900 h-screen flex justify-center text-white'>
      <div className="flex-col">
        {/* Title */}
        <div className='text-2xl sm:text-4xl flex pt-10 gap-6 font-press-start-2p'>
          <span className='text-[#965fd4] text-6xl'>X</span> 
          <span>Tic Tac Toe </span>
          <span className='text-[#4AF626] text-6xl'>O</span>
        </div>
        {/* Win Banner */}
        <div className="flex justify-center mt-10 h-9 text-3xl w-full">
          <span className='text-[#FFD700] '>
            {winner === 'Draw' ? 'Draw' : winner ? `Winner: ${winner}` : null}
          </span>
        </div>
        {/* Reset Button */}
        <div className="flex justify-center mt-10">
          <button 
            className='border-solid border-2 p-4 hover:text-[#4AF626] hover:border-[#4AF626]'
            onClick={resetSquares}
          >
            Reset
          </button>
        </div>
        {/* Game Board */}
        <div className="flex items-center justify-center mt-10 ">
          <div className='bg-white'>
            <Board calculateWinner={calculateWinner} winner={winner} squares={squares} setSquares={setSquares} isNext={isNext} setIsNext={setIsNext} />
          </div>
        </div>

      </div>
    </div>
  )
}

export default App
