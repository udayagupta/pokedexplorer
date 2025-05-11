import React from 'react'

const Loader = ({size="50px"}) => {
  return (
    <div className='loader max-w-max max-h-max'>
        <img src="/pokeball.png" className={`h-[${size}] w-[${size}] mx-auto`} alt="pokeball loader" />
    </div>
  )
}

export default Loader