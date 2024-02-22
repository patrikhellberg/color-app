import React, { PropsWithChildren } from 'react'

type Props = {
  active?: boolean
}

const OverlayContainer = ({ children, active }: PropsWithChildren<Props>) => {
  return (
    <div
      className={`absolute inset-0 w-screen h-screen bg-slate-700/60 grid place-content-center z-20 backdrop-blur-sm transition-all
    ${
      active
        ? 'opacity-100 pointer-events-auto'
        : 'opacity-0 pointer-events-none'
    }
    `}
    >
      {children}
    </div>
  )
}

export default OverlayContainer
