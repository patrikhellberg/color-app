import { RefObject, useEffect } from 'react'

export const useClickOutside = (
  ref: RefObject<HTMLDivElement>,
  onClickOutside: () => void,
  openerId: string
) => {
  useEffect(() => {
    if (!ref.current) return

    const handleClick = ({ target }: MouseEvent) => {
      if (!ref.current || !target) return
      const opener = document.getElementById(openerId) as HTMLDivElement | null
      if (opener?.contains(target as Node)) return
      if (!ref.current.contains(target as Node)) {
        onClickOutside()
      }
    }

    window.addEventListener('click', handleClick)
    return () => window.removeEventListener('click', handleClick)
  }, [ref, openerId])
}
