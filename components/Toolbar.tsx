'use client'

import { useContext } from 'react'
import { AppContext } from './AppContext'
import SVG, { X } from '@bm-js/icons'

const Toolbar = () => {
  const {
    state: { toolbarOpen },
    dispatch,
  } = useContext(AppContext)

  const toggleToolbar = () => dispatch({ type: 'TOGGLE_TOOLBAR' })

  return (
    <div
      className={`absolute right-0 left-0 top-0 bg-slate-700 z-10 px-4 py-12 rounded-b-lg shadow-lg transition-all
    ${!toolbarOpen && '-translate-y-32'}
    `}
    >
      <button className='absolute top-4 right-4' onClick={toggleToolbar}>
        <SVG icon={X} pathClassName='stroke-white' width={20} />
      </button>
      Toolbar
    </div>
  )
}

export default Toolbar
