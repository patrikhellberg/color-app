import { getForegroundColor } from '@/utils/colors'
import { setCssVariable } from '@/utils/css'
import { readQueryState, toQuery } from '@/utils/query'
import {
  type Dispatch,
  type PropsWithChildren,
  createContext,
  useEffect,
  useMemo,
  useReducer,
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

// Opens the toolbar on a first visit; a shared link shows its colors as-is.
const getInitialState = (): AppState => {
  const queryState = readQueryState(window.location.search)
  if (!Object.keys(queryState).length) {
    return { ...initialState, toolbarOpen: true }
  }
  return { ...initialState, ...queryState }
}

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
      return {
        ...state,
        primaryColor: data,
      }
    case 'SET_SECONDARY_COLOR':
      return {
        ...state,
        secondaryColor: data,
      }
    case 'SET_MODE':
      return {
        ...state,
        mode: data,
      }
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

const AppContextProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(reducer, undefined, getInitialState)

  const foreground = useMemo(() => {
    return getForegroundColor(state.primaryColor)
  }, [state.primaryColor])

  // The fade animation reads the colors from CSS variables.
  useEffect(() => {
    setCssVariable('--primary-color', state.primaryColor)
    setCssVariable('--secondary-color', state.secondaryColor)
  }, [state.primaryColor, state.secondaryColor])

  const query = toQuery(state)
  useEffect(() => {
    window.history.replaceState(window.history.state, '', query)
  }, [query])

  return (
    <AppContext.Provider value={{ state, computed: { foreground }, dispatch }}>
      {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider
