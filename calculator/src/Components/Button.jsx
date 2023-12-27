import React from 'react'

const Button = ({handleInput, value, style}) => {
  return (
    <button onClick={()=>{handleInput(value)}} style={style}>{value}</button>
  )
}

export default Button