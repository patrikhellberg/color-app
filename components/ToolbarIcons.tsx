'use client'

import SVG, { Export, GearSix, Info } from '@hellberg/react-svg-icons'
import { useContext } from 'react'
import { AppContext } from './AppContext'

const ToolbarIcons = () => {
  const {
    dispatch,
    computed: { foreground },
  } = useContext(AppContext)

  const icons = [
    {
      action: () => dispatch({ type: 'SET_SHARE_MODAL', data: true }),
      id: 'open_shareModalOpen',
      icon: Export,
    },
    {
      action: () => dispatch({ type: 'SET_INFO_MODAL', data: true }),
      id: 'open_infoModalOpen',
      icon: Info,
    },
    {
      action: () => dispatch({ type: 'SET_TOOLBAR', data: true }),
      id: 'open_toolbar',
      icon: GearSix,
    },
  ]

  return (
    <div className='absolute top-4 right-4 flex gap-4'>
      {icons.map((icon) => (
        <button onClick={icon.action} id={icon.id} key={icon.id}>
          <SVG
            stroke={foreground}
            icon={icon.icon}
            className='cursor-pointer'
            pathClassName='pointer-events-none'
          />
        </button>
      ))}
    </div>
  )
}

export default ToolbarIcons
