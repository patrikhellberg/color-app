'use client'

import { useContext, useRef } from 'react'
import { AppContext } from './AppContext'
import SVG, { X } from '@bm-js/icons'
import { useClickOutside } from '@/utils/hooks'
import ColorInput from './ColorInput'
import ColorPresets from './ColorPresets'

const Toolbar = () => {
  const {
    state: { toolbarOpen, selectedColor },
    computed: { foreground },
    dispatch,
  } = useContext(AppContext)

  const ref = useRef<HTMLDivElement | null>(null)
  const closeToolbar = () => dispatch({ type: 'SET_TOOLBAR', data: false })
  useClickOutside(ref, closeToolbar, 'open_toolbar')

  return (
    <div
      style={{
        background: selectedColor,
        color: foreground,
        borderColor: foreground,
      }}
      ref={ref}
      className={`absolute right-0 left-0 top-0 z-10 px-4 py-4  shadow-lg transition-all border-b border-solid border-black
    ${!toolbarOpen && '-translate-y-full'}
    `}
    >
      <button className='absolute top-4 right-4' onClick={closeToolbar}>
        <SVG icon={X} stroke={foreground} width={20} />
      </button>
      <ColorInput />
      <ColorPresets />
    </div>
  )
}

export default Toolbar
