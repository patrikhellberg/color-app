'use client'

import { ChangeEventHandler, useContext, useRef, useState } from 'react'
import { AppContext } from './AppContext'
import type { AppState, ReducerType } from '@/types'
import SVG, { Palette } from '@hellberg/react-svg-icons'
import ColorPresets from './ColorPresets'

type Props = {
  reducerType: ReducerType
  label: string
  colorKey: keyof AppState
}

const ColorInput = ({ reducerType, label, colorKey }: Props) => {
  const { state, dispatch } = useContext(AppContext)
  const [presetsOpen, setPresetsOpen] = useState(false)

  const inputRef = useRef<HTMLInputElement | null>(null)

  const handleChange: ChangeEventHandler<HTMLInputElement> = ({
    target: { value },
  }) => dispatch({ type: reducerType, data: value })

  const openColorInput = () => {
    if (!inputRef.current) return
    inputRef.current.click()
  }

  return (
    <div>
      <div className='flex justify-between mb-2'>
        <p>{label}</p>
        <button onClick={() => setPresetsOpen(!presetsOpen)} className='pr-1'>
          <SVG
            className='pointer-events-none'
            icon={Palette}
            pathClassName='stroke-slate-300'
            width={20}
          />
        </button>
      </div>
      <input
        ref={inputRef}
        type='color'
        value={state[colorKey] as string}
        onChange={handleChange}
        className='opacity-0 w-0'
      />
      <button
        onClick={openColorInput}
        className='border border-solid h-[41px] rounded-md w-64 border-slate-400'
        style={{
          background: state[colorKey] as string,
        }}
      />
      {presetsOpen && (
        <ColorPresets reducerType={reducerType} stateKey={colorKey} />
      )}
    </div>
  )
}

export default ColorInput
