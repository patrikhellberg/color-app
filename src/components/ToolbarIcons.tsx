import { Info, Maximize, Minimize, Settings, Share } from 'lucide-react'
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
      Icon: Share,
      title: 'Share',
    },
    {
      action: () => dispatch({ type: 'SET_INFO_MODAL', data: true }),
      id: 'open_infoModalOpen',
      Icon: Info,
      title: 'Information',
    },
    {
      action: () => dispatch({ type: 'SET_TOOLBAR', data: true }),
      id: 'open_toolbar',
      Icon: Settings,
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

  const FullScreenIcon = isFullScreen ? Minimize : Maximize

  return (
    <div className='absolute top-4 right-4 flex gap-4'>
      <button
        onClick={makeFullScreen}
        title={isFullScreen ? 'Exit full screen' : 'Full screen'}
      >
        <FullScreenIcon
          size={32}
          strokeWidth={1.5}
          color={foreground}
          className='pointer-events-none'
        />
      </button>
      {icons.map(({ action, id, Icon, title }) => (
        <button onClick={action} id={id} key={id} title={title}>
          <Icon
            size={32}
            strokeWidth={1.5}
            color={foreground}
            className='pointer-events-none'
          />
        </button>
      ))}
    </div>
  )
}

export default ToolbarIcons
