'use client'

import SVG, { Export, GearSix, Info } from '@bm-js/icons'
import { useContext } from 'react'
import { AppContext } from './AppContext'

const ToolbarIcon = () => {
  const { dispatch } = useContext(AppContext)

  const openToolbar = () => dispatch({ type: 'SET_TOOLBAR', data: true })
  const openInfoModal = () => dispatch({ type: 'SET_INFO_MODAL', data: true })

  return (
    <div className='absolute top-4 right-4 flex gap-4'>
      <button>
        <SVG icon={Export} />
      </button>
      <button onClick={openInfoModal}>
        <SVG icon={Info} />
      </button>
      <button onClick={openToolbar}>
        <SVG icon={GearSix} className='cursor-pointer' />
      </button>
    </div>
  )
}

export default ToolbarIcon
