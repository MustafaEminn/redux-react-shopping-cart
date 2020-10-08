import { data } from "../data";

const INITIAL_STATE = {
  productList: data,
  cart: []
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SEPETE_EKLE":
      return { ...state, cart: [...state.cart, action.payload], productList: state.productList.filter(item => item.id !== action.payload.id) };
    case "SEPET_SIL":
        return {...state ,cart: state.cart.filter(item => item.id !== action.payload.id), productList: [...state.productList, action.payload]}
    default:
      return state;
  }
};
