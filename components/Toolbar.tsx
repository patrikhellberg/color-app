'use client'

import { useContext, useRef } from 'react'
import { AppContext } from './AppContext'
import SVG, { X } from '@bm-js/icons'
import { useClickOutside } from '@/utils/hooks'

const Toolbar = () => {
  const {
    state: { toolbarOpen },
    dispatch,
  } = useContext(AppContext)

  const ref = useRef<HTMLDivElement | null>(null)
  const closeToolbar = () => dispatch({ type: 'SET_TOOLBAR', data: false })
  useClickOutside(ref, closeToolbar, 'open_toolbar')

  return (
    <div
      ref={ref}
      className={`absolute right-0 left-0 top-0 bg-slate-700 z-10 px-4 py-12 rounded-b-lg shadow-lg transition-all
    ${!toolbarOpen && '-translate-y-32'}
    `}
    >
      <button className='absolute top-4 right-4' onClick={closeToolbar}>
        <SVG icon={X} pathClassName='stroke-white' width={20} />
      </button>
      Toolbar
    </div>
  )
}

export default Toolbar
