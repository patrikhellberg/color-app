'use client'

import { ChangeEventHandler, useContext, useRef } from 'react'
import { AppContext, AppState, ReducerType } from './AppContext'

type Props = {
  reducerType: ReducerType
  label: string
  colorKey: keyof AppState
}

const ColorInput = ({ reducerType, label, colorKey }: Props) => {
  const {
    state,
    computed: { foreground },
    dispatch,
  } = useContext(AppContext)

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
      <p>{label}</p>
      <input
        ref={inputRef}
        type='color'
        value={state[colorKey] as string}
        onChange={handleChange}
        className='opacity-0 w-0'
      />
      <button
        onClick={openColorInput}
        className='border border-solid h-[41px] rounded-md w-64'
        style={{
          background: state[colorKey] as string,
          borderColor: foreground,
        }}
      ></button>
    </div>
  )
}

export default ColorInput
