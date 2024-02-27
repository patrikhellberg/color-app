import { getForegroundColor } from '@/utils/colors'
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

type AppState = {
  toolbarOpen: boolean
  infoModalOpen: boolean
  shareModalOpen: boolean
  selectedColor: string
}

type Computed = {
  foreground: string
}

export type ReducerType =
  | 'SET_COLOR'
  | 'SET_TOOLBAR'
  | 'SET_INFO_MODAL'
  | 'SET_SHARE_MODAL'
  | 'SET_FROM_QUERY'

type ReducerAction = {
  type: ReducerType
  data: any
}

const initialState: AppState = {
  toolbarOpen: false,
  infoModalOpen: false,
  shareModalOpen: false,
  selectedColor: '#333333',
}

const initialComputed: Computed = {
  foreground: '#FFFFFF',
}

const queryKeys: (keyof AppState)[] = ['selectedColor']

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
    case 'SET_COLOR':
      return {
        ...state,
        selectedColor: data,
      }
    case 'SET_FROM_QUERY':
      return {
        ...state,
        ...data,
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
    return getForegroundColor(state.selectedColor)
  }, [state.selectedColor])

  useEffect(() => {
    if (!isInitialized) {
      const queryState: { [key: string]: string } = {}
      searchParams.forEach((value, key) => {
        queryState[key] = value
      })
      dispatch({ type: 'SET_FROM_QUERY', data: queryState })
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
