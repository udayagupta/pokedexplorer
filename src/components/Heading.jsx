import React from 'react'

const Heading = ({title}) => {
  return (
    <div className="font-semibold section-heading bg-slate-800 text-lg p-1 rounded-md text-center">
        <h3>{title}</h3>
    </div>
  )
}

export default Heading