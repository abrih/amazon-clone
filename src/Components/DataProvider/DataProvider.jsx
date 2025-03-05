
import { createContext, useReducer } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children, reducer, initialState }) => {

  const [state, dispatch] = useReducer(reducer, initialState);
//  usereducer return state and dispatch
  return (
    <DataContext.Provider value={[state, dispatch]}>
      {children}
    </DataContext.Provider>
  );
};

