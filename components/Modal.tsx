'use client'

import { PropsWithChildren, useContext, useMemo, useRef } from 'react'
import { AppContext } from './AppContext'
import type { ReducerType, ModalKey } from '@/types'
import OverlayContainer from './OverlayContainer'
import SVG, { X } from '@hellberg/react-svg-icons'
import { useClickOutside } from '@/utils/hooks'

type Props = {
  modalKey: ModalKey
  closeActionType: ReducerType
}

const Modal = ({
  modalKey,
  closeActionType,
  children,
}: PropsWithChildren<Props>) => {
  const { state, dispatch } = useContext(AppContext)

  const ref = useRef<HTMLDivElement | null>(null)
  const close = () => dispatch({ type: closeActionType, data: false })
  const active = useMemo(() => state[modalKey], [state, modalKey])
  useClickOutside(ref, close, `open_${modalKey}`)

  return (
    <OverlayContainer active={active}>
      <div
        className='bg-white p-4 rounded-lg max-w-[600px] relative border border-solid border-slate-500'
        ref={ref}
      >
        <button className='absolute top-4 right-4' onClick={close}>
          <SVG icon={X} width={20} />
        </button>
        {children}
      </div>
    </OverlayContainer>
  )
}

export default Modal
