import React, { useState } from 'react'

const GameIndices = ({gameIndices, setSelectedGameIndex, selected}) => {

  const handleChange = (event) => {
    setSelectedGameIndex(event.target.value)
  }

  return (
    <div className='flex items-center gap-4'>
      <label htmlFor="gameIndices" className='text-xl'>Game Version</label>
      <select 
      className='text-xl capitalize w-[150px] px-2 py-1 bg-slate-700 rounded-md' 
      onChange={(e) => handleChange(e)} 
      value={selected} 
      name="gameIndices" 
      id="gameIndices">
        {
          gameIndices?.map((gameIndex, index) => (
            <option key={index} value={gameIndex.version.name}>{gameIndex.version.name.split('-').join(' ')}</option>
          ))
        }
      </select>
    </div>
  )
}

export default GameIndices