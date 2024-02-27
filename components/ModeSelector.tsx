import { useContext } from 'react'
import { AppContext } from './AppContext'
import type { Mode } from '@/types'

const ModeSelector = () => {
  const {
    state: { mode },
    dispatch,
  } = useContext(AppContext)

  const modes: { [key in Mode]: string } = {
    single: 'Color',
    gradient: 'Gradient',
    fade: 'Fade',
  }

  const setMode = (mode: Mode) => dispatch({ type: 'SET_MODE', data: mode })

  return (
    <div className='flex flex-col items-start'>
      <p className='mb-2'>Select mode</p>
      <div className='flex bg-slate-700 rounded-md border border-solid border-slate-400 p-1'>
        {(Object.keys(modes) as Mode[]).map((key) => (
          <button
            onClick={() => setMode(key)}
            key={`mode_${key}`}
            className={`px-4 py-1 rounded transition-colors text-slate-300 ${
              key === mode ? 'bg-slate-900' : ''
            }`}
          >
            {modes[key]}
          </button>
        ))}
      </div>
    </div>
  )
}

export default ModeSelector
