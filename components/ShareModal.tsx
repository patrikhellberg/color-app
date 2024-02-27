'use client'

import { useState } from 'react'
import Modal from './Modal'

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
          className='py-2 px-4 border border-solid border-slate-800 rounded hover:bg-slate-800 hover:text-slate-200 transition-colors'
          onClick={copyLink}
        >
          {hasCopied ? 'Link copied!' : 'Copy link'}
        </button>
      </div>
    </Modal>
  )
}

export default ShareModal
