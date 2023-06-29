import React from 'react'

/* This component represent a cell in the board 
    'value'             => the current value of the cell ('X' or 'O')
    'onPlayerClick' :   => callback function that is triggered when the cell is clicked by the player
*/
const Square = ({value, onPlayerClick}) => {
    return ( 
        <button className={`w-28 h-28 text-5xl bg-gray-900 ${value === 'X' ? 'text-[#965fd4]' : 'text-[#4AF626]'}`} onClick={onPlayerClick}>
            {value}
        </button>
    )
}

export default Square
