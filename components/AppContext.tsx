import { Dispatch, PropsWithChildren, createContext, useReducer } from 'react'

type AppState = {
  toolbarOpen: boolean
  infoModalOpen: boolean
  selectedColor: string
}

type ReducerType = 'SET_COLOR' | 'SET_TOOLBAR' | 'SET_INFO_MODAL'

type ReducerAction = {
  type: ReducerType
  data: any
}

const initialState: AppState = {
  toolbarOpen: false,
  infoModalOpen: false,
  selectedColor: '#000000',
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
}>({
  state: initialState,
  dispatch: () => {},
})

const Context = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  )
}

export default Context
