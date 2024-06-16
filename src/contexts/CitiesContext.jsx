import { createContext, useReducer } from "react";

const CitiesContext = createContext();

const initialState = {
  cities: [],
  userId: 1,
};
function reducer(state, action) {
  switch (action.type) {
    case "loadCities":
      return { ...state, cities: action.payload };
    case "updateUserId":
      return { ...state, userId: action.payload };
    default:
      return state;
  }
}
function CitiesProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <CitiesContext.Provider value={{ state, dispatch }}>
      {children}
    </CitiesContext.Provider>
  );
}
export { CitiesContext, CitiesProvider };
