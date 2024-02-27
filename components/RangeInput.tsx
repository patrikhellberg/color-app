import { ChangeEventHandler, useContext } from 'react'
import { AppContext, AppState, ReducerType } from './AppContext'

type Props = {
  stateKey: keyof AppState
  reducerType: ReducerType
  label: string
  min: number
  max: number
  unit: string
  step?: number
}

const RangeInput = ({
  stateKey,
  reducerType,
  label,
  min,
  max,
  unit,
  step = 1,
}: Props) => {
  const { state, dispatch } = useContext(AppContext)

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) =>
    dispatch({ type: reducerType, data: e.target.value })

  return (
    <div>
      <p>{label}</p>
      <input
        className='w-40'
        type='range'
        value={state[stateKey] as number}
        onChange={handleChange}
        max={max}
        min={min}
        step={step}
      />
      <p className='text-xs'>
        {state[stateKey]} {unit}
      </p>
    </div>
  )
}

export default RangeInput
