import { Dispatch, PropsWithChildren, createContext, useReducer } from 'react'

type AppState = {
  toolbarOpen: boolean
  selectedColor: string
}

type ReducerType = 'SET_COLOR' | 'TOGGLE_TOOLBAR'

type ReducerAction = {
  type: ReducerType
  data?: any
}

const initialState: AppState = {
  toolbarOpen: false,
  selectedColor: '#000000',
}

const reducer = (state: AppState, action: ReducerAction): AppState => {
  switch (action.type) {
    case 'TOGGLE_TOOLBAR':
      return {
        ...state,
        toolbarOpen: !state.toolbarOpen,
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
