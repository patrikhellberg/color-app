import { getForegroundColor } from '@/utils/colors'
import { setCssVariable } from '@/utils/css'
import { useRouter, useSearchParams } from 'next/navigation'
import {
  Dispatch,
  PropsWithChildren,
  createContext,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from 'react'

import type { AppState, Computed, ReducerAction } from '@/types'

const initialState: AppState = {
  toolbarOpen: false,
  infoModalOpen: false,
  shareModalOpen: false,
  primaryColor: '#284de2',
  secondaryColor: '#df46e2',
  mode: 'gradient',
  gradientDirection: 45,
  fadeTime: 5,
}

const initialComputed: Computed = {
  foreground: '#FFFFFF',
}

const queryKeys: (keyof AppState)[] = [
  'primaryColor',
  'mode',
  'secondaryColor',
  'gradientDirection',
  'fadeTime',
]

const reducer = (state: AppState, { type, data }: ReducerAction): AppState => {
  switch (type) {
    case 'SET_TOOLBAR':
      return {
        ...state,
        toolbarOpen: data,
      }
    case 'SET_INFO_MODAL':
      return {
        ...state,
        infoModalOpen: data,
      }
    case 'SET_SHARE_MODAL':
      return {
        ...state,
        shareModalOpen: data,
      }
    case 'SET_PRIMARY_COLOR':
      setCssVariable('--primary-color', data)
      return {
        ...state,
        primaryColor: data,
      }
    case 'SET_SECONDARY_COLOR':
      setCssVariable('--secondary-color', data)
      return {
        ...state,
        secondaryColor: data,
      }
    case 'SET_MODE':
      return {
        ...state,
        mode: data,
      }
    case 'SET_FROM_QUERY':
      const updated = { ...state, ...data }
      setCssVariable('--primary-color', updated.primaryColor)
      setCssVariable('--secondary-color', updated.secondaryColor)
      return updated
    case 'SET_GRADIENT_DIRECTION':
      return {
        ...state,
        gradientDirection: data,
      }
    case 'SET_FADE_TIME':
      return {
        ...state,
        fadeTime: data,
      }
    default:
      return state
  }
}

export const AppContext = createContext<{
  state: AppState
  dispatch: Dispatch<ReducerAction>
  computed: Computed
}>({
  state: initialState,
  dispatch: () => {},
  computed: initialComputed,
})

const Context = ({ children }: PropsWithChildren) => {
  const [isInitialized, setIsInitialized] = useState(false)
  const [state, dispatch] = useReducer(reducer, initialState)
  const searchParams = useSearchParams()
  const router = useRouter()

  const foreground = useMemo(() => {
    return getForegroundColor(state.primaryColor)
  }, [state.primaryColor])

  useEffect(() => {
    if (!isInitialized) {
      const queryState: { [key: string]: string } = {}
      searchParams.forEach((value, key) => {
        queryState[key] = value
      })
      if (Object.keys(queryState).length) {
        dispatch({ type: 'SET_FROM_QUERY', data: queryState })
      } else dispatch({ type: 'SET_TOOLBAR', data: true })
      setIsInitialized(true)
    } else {
      const query = queryKeys.reduce((acc, key, i) => {
        acc += `${key}=${encodeURIComponent(state[key] as string)}`
        if (i !== queryKeys.length - 1) acc += '&'
        return acc
      }, '?')
      router.push(`${query}`)
    }
  }, [state, isInitialized, searchParams, router])

  return (
    <AppContext.Provider value={{ state, computed: { foreground }, dispatch }}>
      {children}
    </AppContext.Provider>
  )
}

export default Context
