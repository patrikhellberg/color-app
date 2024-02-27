export type ColorLetter = 'r' | 'g' | 'b'

export type Mode = 'single' | 'gradient' | 'fade'

export type AppState = {
  toolbarOpen: boolean
  infoModalOpen: boolean
  shareModalOpen: boolean
  primaryColor: string
  secondaryColor: string
  gradientDirection: number
  mode: Mode
  fadeTime: number
}

export type Computed = {
  foreground: string
}

export type ModalKey = 'infoModalOpen' | 'shareModalOpen'

export type ReducerType =
  | 'SET_PRIMARY_COLOR'
  | 'SET_TOOLBAR'
  | 'SET_INFO_MODAL'
  | 'SET_SHARE_MODAL'
  | 'SET_MODE'
  | 'SET_FROM_QUERY'
  | 'SET_SECONDARY_COLOR'
  | 'SET_GRADIENT_DIRECTION'
  | 'SET_FADE_TIME'

export type ReducerAction = {
  type: ReducerType
  data: any
}
