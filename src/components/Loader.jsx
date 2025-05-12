import React from 'react'

const Loader = ({size}) => {
  return (
    <div className='loader max-w-max max-h-max'>
        <img style={{height: size, width: size}} src="/pokeball.png" className={`mx-auto max-w-max`} alt="pokeball loader" />
    </div>
  )
}

export default Loader