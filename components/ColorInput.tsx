'use client'

import { ChangeEventHandler, useContext } from 'react'
import { AppContext } from './AppContext'

const ColorInput = () => {
  const {
    state: { selectedColor },
    dispatch,
  } = useContext(AppContext)

  const handleChange: ChangeEventHandler<HTMLInputElement> = ({
    target: { value },
  }) => dispatch({ type: 'SET_COLOR', data: value })

  return <input type='color' value={selectedColor} onChange={handleChange} />
}

export default ColorInput
