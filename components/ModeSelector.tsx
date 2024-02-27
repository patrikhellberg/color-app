import { useContext } from 'react'
import { AppContext, Mode } from './AppContext'

const ModeSelector = () => {
  const {
    state: { mode },
    computed: { foreground },
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
      <p>Select mode</p>
      <div
        className='flex bg-white rounded-md border border-solid p-1'
        style={{
          borderColor: foreground,
        }}
      >
        {(Object.keys(modes) as Mode[]).map((key) => (
          <button
            onClick={() => setMode(key)}
            key={`mode_${key}`}
            className={`px-4 py-1 rounded transition-colors text-black ${
              key === mode ? 'bg-slate-300' : ''
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
