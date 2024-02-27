'use client'

import { useContext, useRef } from 'react'
import { AppContext } from './AppContext'
import SVG, { X } from '@hellberg/react-svg-icons'
import { useClickOutside } from '@/utils/hooks'
import ColorInput from './ColorInput'
import ModeSelector from './ModeSelector'
import RangeInput from './RangeInput'

const Toolbar = () => {
  const {
    state: { toolbarOpen, primaryColor, mode },
    computed: { foreground },
    dispatch,
  } = useContext(AppContext)

  const ref = useRef<HTMLDivElement | null>(null)
  const closeToolbar = () => dispatch({ type: 'SET_TOOLBAR', data: false })
  useClickOutside(ref, closeToolbar, 'open_toolbar')

  return (
    <div
      style={{
        background: primaryColor,
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
      <div className='flex gap-4'>
        <ModeSelector />
        <ColorInput
          colorKey='primaryColor'
          reducerType='SET_PRIMARY_COLOR'
          label={mode === 'single' ? 'Select color' : 'Select primary color'}
        />
        {mode !== 'single' && (
          <ColorInput
            colorKey='secondaryColor'
            reducerType='SET_SECONDARY_COLOR'
            label={'Select secondary color'}
          />
        )}
        {mode === 'gradient' && (
          <RangeInput
            min={0}
            max={360}
            unit='deg'
            reducerType='SET_GRADIENT_DIRECTION'
            label='Select gradient direction'
            stateKey='gradientDirection'
          />
        )}
        {mode === 'fade' && (
          <RangeInput
            min={1}
            max={20}
            label='Set fade time'
            reducerType='SET_FADE_TIME'
            stateKey='fadeTime'
            unit='seconds'
          />
        )}
      </div>
    </div>
  )
}

export default Toolbar
