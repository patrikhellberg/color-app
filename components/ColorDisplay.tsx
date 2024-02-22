'use client'

import { useContext } from 'react'
import { AppContext } from './AppContext'

const ColorDisplay = () => {
  const {
    state: { selectedColor },
  } = useContext(AppContext)
  return (
    <div
      className='h-screen'
      style={{
        background: selectedColor,
      }}
    />
  )
}

export default ColorDisplay
