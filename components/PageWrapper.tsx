'use client'

import { PropsWithChildren, Suspense } from 'react'
import Context from './AppContext'

const PageWrapper = ({ children }: PropsWithChildren) => {
  return (
    <Suspense>
      <Context>{children}</Context>
    </Suspense>
  )
}

export default PageWrapper
