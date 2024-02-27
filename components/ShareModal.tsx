'use client'

import { useState } from 'react'
import Modal from './Modal'
import SVG, { Checks, Copy, CopySimple } from '@hellberg/react-svg-icons'

const ShareModal = () => {
  const [hasCopied, setHasCopied] = useState(false)

  const copyLink = () => {
    navigator.clipboard.writeText(location.href)
    setHasCopied(true)
    setTimeout(() => setHasCopied(false), 1000)
  }

  return (
    <Modal modalKey='shareModalOpen' closeActionType='SET_SHARE_MODAL'>
      <h1 className='font-semibold text-xl mb-2'>
        Share a link to this color setting
      </h1>
      <p className='mb-4'>
        The link contains all informaiton to display the same color setting on
        another device. Share using one of the options below.
      </p>
      <div>
        <button
          className='py-2 px-4 border border-solid border-slate-800 rounded hover:bg-slate-800 hover:text-slate-200 transition-colors flex items-center gap-2 group'
          onClick={copyLink}
        >
          {hasCopied ? 'Link copied!' : 'Copy link'}
          <SVG
            icon={hasCopied ? Checks : CopySimple}
            width={20}
            className='pointer-events-none'
            pathClassName='group-hover:stroke-slate-200 stroke-black'
          />
        </button>
      </div>
    </Modal>
  )
}

export default ShareModal
