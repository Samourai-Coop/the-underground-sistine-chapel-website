import React, {
  createContext, useContext, useReducer,
} from 'react'
import * as Actions from './actions'

export const initialState = {
  selectedTab: 'home',
}
export const AppContext = createContext(initialState)
export const useAppContext = () => useContext(AppContext)

export const reducerActions = {
  [Actions.SetSelectedTab]: (oldState, action) => ({
    ...oldState,
    selectedTab: action.payload.selectedTab,
  }),
}

export const reducer = (oldState, action) => {
  if (reducerActions[action.type]) {
    return reducerActions[action.type](oldState, action)
  }
  console.warn('Unknown action type', action.type)
  return oldState
}

// eslint-disable-next-line react/prop-types
export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, { ...initialState })

  return (
    <AppContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default AppContext
