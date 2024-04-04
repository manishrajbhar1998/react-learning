import React, { createContext, useContext, useMemo, useReducer } from 'react';
import reducer from './Reducer';

const initialData = {
    gold : 3000,
    silver: 1000
}

const ThemeContext =  createContext();

const DataProvider = ({children}) => {

  const [state, dispatch] = useReducer(reducer, initialData)

  const memoizedData = useMemo(()=>[state,dispatch],[state,dispatch])

  return (
    <ThemeContext.Provider value={memoizedData} >
      {children}
    </ThemeContext.Provider>
  )
}

export default DataProvider

export const DataMapping = () => {
  const DataMapping = useContext(ThemeContext);
  return DataMapping
} 
