import { ActionTypes } from "../constants/action-types";

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};
export const removeSelectedProduct = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};

export const updateCartItem = item => ({
  type:ActionTypes.UPDATE_CART_ITEM,
  item
})

export const updateCartItemQuantity = (product, quantity) => ({
  type:ActionTypes.UPDATE_CART_ITEM_QUANTITY,
  product,
  quantity
})

export const clearCart = () => ({
  type:ActionTypes.CLEAR_CART,
})