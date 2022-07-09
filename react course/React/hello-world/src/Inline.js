import React from 'react'

const heading = {
    fontSize: '72px',
    color: 'blue'
}

function Inline() {
  return (
    <>
    <h1 className='error'>Erfgror</h1>
    <div><h1 style={heading}>Inline</h1></div>
    </>
  )
}

export default Inline