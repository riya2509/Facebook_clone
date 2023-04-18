import React, { createContext, useContext, useReducer } from "react";

//Preparing the data layer
export const StateContext = createContext();

//Higher order Component to wrap the App
export const StateProvider = ({ reducer, initialState, children }) => {
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>;
};

//For pulling anything from the data layer we will use the hook useStateValue
export const useStateValue = () => useContext(StateContext);

// Creating Reducer.js the data layer
