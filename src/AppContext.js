// AppContext.js
import React, { createContext, useContext, useReducer } from "react";

const AppContext = createContext();

const initialState = {
  cartItems: [],
  selectedCategory: null,
  user: { name: "John Doe", email: "john@example.com" },
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, cartItems: [...state.cartItems, action.payload] };
    case "REMOVE_FROM_CART":
      const updatedCart = state.cartItems.filter(
        (item, index) => index !== action.payload
      );
      return { ...state, cartItems: updatedCart };
    case "SELECT_CATEGORY":
      return { ...state, selectedCategory: action.payload };
    default:
      return state;
  }
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
