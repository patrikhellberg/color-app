import { useContext } from 'react'
import { AppContext } from './AppContext'
import type { AppState, ReducerType } from '@/types'
import { colorPresets, getForegroundColor } from '@/utils/colors'

type Props = {
  stateKey: keyof AppState
  reducerType: ReducerType
}

const ColorPresets = ({ stateKey, reducerType }: Props) => {
  const { dispatch } = useContext(AppContext)
  const onSelect = (value: string) =>
    dispatch({ type: reducerType, data: value })

  return (
    <div className=' relative after:absolute after:bottom-0 after:left-0 after:right-0 after:bg-gradient-to-t after:to-transparent after:from-slate-900 after:content-[""] after:h-8'>
      <p>Color presets</p>
      <div className='grid grid-cols-2 gap-2 w-64 max-h-64 overflow-scroll pb-8'>
        {Object.keys(colorPresets).map((key) => (
          <button
            key={`preset_${stateKey}_${key}`}
            onClick={() => onSelect(colorPresets[key])}
            className='rounded border border-solid'
            style={{
              background: colorPresets[key],
              borderColor: getForegroundColor(colorPresets[key]),
              color: getForegroundColor(colorPresets[key]),
            }}
          >
            {key}
          </button>
        ))}
      </div>
    </div>
  )
}

export default ColorPresets
