import { useContext, useEffect, useRef, useState } from 'react'
import Modal from './Modal'
import { Checks, CopySimple } from '@hellberg/react-svg-icons'
import SVG from './Icon'
import { toCanvas } from 'qrcode'
import { AppContext } from './AppContext'
import { getShareUrl } from '@/utils/query'

const ShareModal = () => {
  const { state } = useContext(AppContext)
  const [hasCopied, setHasCopied] = useState(false)
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const shareUrl = getShareUrl(state)

  const copyLink = () => {
    navigator.clipboard.writeText(shareUrl)
    setHasCopied(true)
    setTimeout(() => setHasCopied(false), 1000)
  }

  useEffect(() => {
    if (!canvasRef.current) return
    toCanvas(canvasRef.current, shareUrl)
  }, [shareUrl])

  return (
    <Modal modalKey='shareModalOpen' closeActionType='SET_SHARE_MODAL'>
      <h1 className='font-semibold text-xl mb-2'>
        Share a link to this color setting
      </h1>
      <p className='mb-4'>
        The link contains all informaiton to display the same color setting on
        another device. Share using one of the options below.
      </p>
      <div className='flex sm:flex-row items-center flex-col sm:items-start gap-2'>
        <button
          className='py-2 px-4 border border-solid border-slate-800 rounded-sm hover:bg-slate-800 hover:text-slate-200 transition-colors flex items-center gap-2 group sm:w-[unset] w-full justify-between'
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
        <canvas
          ref={canvasRef}
          className='border border-solid border-slate-800 rounded-sm'
        />
      </div>
    </Modal>
  )
}

export default ShareModal
