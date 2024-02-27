'use client'

import { useContext } from 'react'
import { AppContext } from './AppContext'
import { colorPresets, getForegroundColor } from '@/utils/colors'

const ColorPresets = () => {
  const { dispatch } = useContext(AppContext)

  const handleSelect = (data: string) =>
    dispatch({ type: 'SET_PRIMARY_COLOR', data })

  return (
    <div className='mt-4 flex gap-2 flex-wrap'>
      {Object.keys(colorPresets).map((key) => (
        <button
          className='w-16 h-14 rounded flex items-center text-center justify-center border border-solid border-black p-1'
          key={`col_preset_${key}`}
          onClick={() => handleSelect(colorPresets[key])}
          style={{
            background: colorPresets[key],
            borderColor: getForegroundColor(colorPresets[key]),
            color: getForegroundColor(colorPresets[key]),
          }}
        >
          <span className='text-[10px]'>{key}</span>
        </button>
      ))}
    </div>
  )
}

export default ColorPresets
