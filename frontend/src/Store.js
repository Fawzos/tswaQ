import { createContext, useReducer } from 'react';

export const Store = createContext();

const initailState = {
  cart: {
    cartItems: [],
  },
};
const reducer = (state, action) => {
  switch (action.type) {
    case 'CART_ADD_ITEM':
      return {
        ...state,
        cart: {
          ...state.cart,
          cartItems: [...state.cart.cartItems, action.payload],
        },
      };
    default:
      return state;
  }
};
export function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initailState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
