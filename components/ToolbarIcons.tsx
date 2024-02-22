'use client'

import SVG, { Export, GearSix } from '@bm-js/icons'
import { useContext } from 'react'
import { AppContext } from './AppContext'

const ToolbarIcon = () => {
  const { dispatch } = useContext(AppContext)

  const toggleToolbar = () => dispatch({ type: 'TOGGLE_TOOLBAR' })

  return (
    <div className='absolute top-4 right-4 flex gap-4'>
      <button>
        <SVG icon={Export} />
      </button>
      <button onClick={toggleToolbar}>
        <SVG icon={GearSix} className='cursor-pointer' />
      </button>
    </div>
  )
}

export default ToolbarIcon
