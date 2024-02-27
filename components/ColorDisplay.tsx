'use client'

import { useContext, useMemo } from 'react'
import { AppContext } from './AppContext'

const ColorDisplay = () => {
  const {
    state: { primaryColor, mode, secondaryColor, gradientDirection, fadeTime },
  } = useContext(AppContext)

  const style = useMemo(() => {
    if (mode === 'single') return { backgroundColor: primaryColor }
    if (mode === 'gradient') {
      return {
        backgroundImage: `linear-gradient(${gradientDirection}deg, ${primaryColor}, ${secondaryColor})`,
      }
    }
    if (mode === 'fade') {
      return {
        animationName: 'colorfade',
        animationDuration: `${fadeTime}s`,
        animationDirection: 'alternate',
        animationIterationCount: 'infinite',
      }
    }
  }, [primaryColor, mode, secondaryColor, gradientDirection, fadeTime])

  return <div className='h-screen transition-colors' style={style} />
}

export default ColorDisplay
