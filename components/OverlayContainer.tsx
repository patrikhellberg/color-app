import React, { PropsWithChildren } from 'react'

type Props = {
  active?: boolean
}

const OverlayContainer = ({ children, active }: PropsWithChildren<Props>) => {
  return (
    <div
      className={`fixed inset-0 w-screen h-screen grid place-content-center z-20 backdrop-blur-sm transition-all p-4 
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
