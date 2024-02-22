'use client'

import { PropsWithChildren } from 'react'
import Context from './AppContext'

const PageWrapper = ({ children }: PropsWithChildren) => {
  return <Context>{children}</Context>
}

export default PageWrapper
