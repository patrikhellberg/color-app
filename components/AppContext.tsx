import { getForegroundColor } from '@/utils/colors'
import {
  Dispatch,
  PropsWithChildren,
  createContext,
  useMemo,
  useReducer,
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
  const [state, dispatch] = useReducer(reducer, initialState)

  const foreground = useMemo(() => {
    return getForegroundColor(state.selectedColor)
  }, [state.selectedColor])

  return (
    <AppContext.Provider value={{ state, computed: { foreground }, dispatch }}>
      {children}
    </AppContext.Provider>
  )
}

export default Context
