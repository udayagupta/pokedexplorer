import React from 'react'

const PokemonType = ({ type, with_text }) => {
  return (
    <div title={type} className={`flex gap-3 justify-center items-center bg-slate-600 cursor-pointer  ${with_text ? "rounded-lg p-[4px] px-[10px]" : "rounded-[50%]"}`}>
        {with_text && <p className='capitalize text-xl' style={{letterSpacing: '1px'}}>{type}</p>}
        <img className="h-[40px] w-[40px]" src={`./types/${type}.png`} alt={type} />
    </div>
  )
}

export default PokemonType