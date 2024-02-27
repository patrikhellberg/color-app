export const setCssVariable = (key: string, value: string) => {
  const root = document.querySelector(':root') as HTMLElement
  if (!root) return
  root.style.setProperty(key, value)
}
