import type { AppState } from '@/types'

const queryKeys = [
  'primaryColor',
  'mode',
  'secondaryColor',
  'gradientDirection',
  'fadeTime',
] as const satisfies (keyof AppState)[]

export const readQueryState = (search: string): Partial<AppState> => {
  const params = new URLSearchParams(search)
  const queryState: { [key: string]: string } = {}
  params.forEach((value, key) => {
    queryState[key] = value
  })
  return queryState as Partial<AppState>
}

export const toQuery = (state: AppState) =>
  `?${queryKeys
    .map((key) => `${key}=${encodeURIComponent(state[key])}`)
    .join('&')}`

export const getShareUrl = (state: AppState) =>
  `${window.location.origin}${window.location.pathname}${toQuery(state)}`
