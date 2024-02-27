'use client'

import SVG, {
  ArrowsIn,
  ArrowsOut,
  Export,
  GearSix,
  Info,
} from '@hellberg/react-svg-icons'
import { useContext, useState } from 'react'
import { AppContext } from './AppContext'

const ToolbarIcons = () => {
  const {
    dispatch,
    computed: { foreground },
  } = useContext(AppContext)

  const [isFullScreen, setIsFullScreen] = useState(false)

  const icons = [
    {
      action: () => dispatch({ type: 'SET_SHARE_MODAL', data: true }),
      id: 'open_shareModalOpen',
      icon: Export,
      title: 'Share',
    },
    {
      action: () => dispatch({ type: 'SET_INFO_MODAL', data: true }),
      id: 'open_infoModalOpen',
      icon: Info,
      title: 'Information',
    },
    {
      action: () => dispatch({ type: 'SET_TOOLBAR', data: true }),
      id: 'open_toolbar',
      icon: GearSix,
      title: 'Settings',
    },
  ]

  const makeFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen()
      setIsFullScreen(true)
    } else if (document.exitFullscreen) {
      document.exitFullscreen()
      setIsFullScreen(false)
    }
  }

  return (
    <div className='absolute top-4 right-4 flex gap-4'>
      <button
        onClick={makeFullScreen}
        title={isFullScreen ? 'Exit full screen' : 'Full screen'}
      >
        <SVG
          stroke={foreground}
          icon={isFullScreen ? ArrowsIn : ArrowsOut}
          className='cursor-pointer'
          pathClassName='pointer-events-none'
        />
      </button>
      {icons.map((icon) => (
        <button
          onClick={icon.action}
          id={icon.id}
          key={icon.id}
          title={icon.title}
        >
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
