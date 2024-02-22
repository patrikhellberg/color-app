'use client'

import SVG, { Export, GearSix, Info } from '@bm-js/icons'
import { useContext } from 'react'
import { AppContext } from './AppContext'

const ToolbarIcon = () => {
  const { dispatch } = useContext(AppContext)

  const openToolbar = () => dispatch({ type: 'SET_TOOLBAR', data: true })
  const openInfoModal = () => dispatch({ type: 'SET_INFO_MODAL', data: true })
  const openShareModal = () => dispatch({ type: 'SET_SHARE_MODAL', data: true })

  return (
    <div className='absolute top-4 right-4 flex gap-4'>
      <button onClick={openShareModal} id={'open_shareModalOpen'}>
        <SVG
          icon={Export}
          className='cursor-pointer'
          pathClassName='pointer-events-none'
        />
      </button>
      <button onClick={openInfoModal} id={'open_infoModalOpen'}>
        <SVG
          icon={Info}
          className='cursor-pointer'
          pathClassName='pointer-events-none'
        />
      </button>
      <button onClick={openToolbar} id={'open_toolbar'}>
        <SVG
          icon={GearSix}
          className='cursor-pointer'
          pathClassName='pointer-events-none'
        />
      </button>
    </div>
  )
}

export default ToolbarIcon
