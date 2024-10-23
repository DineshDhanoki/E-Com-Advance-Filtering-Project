import React from 'react'

function Input({handleChange, title, name, color, value}) {
  return (
    <label className="sidebar-label-container">
          <input type="radio" onChange={handleChange} name={name} value={value}/>
          <span className="checkmark" style={{backgroundColor: color}}></span>{title}
        </label>
  )
}

export default Input
