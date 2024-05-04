import { ActionTypes } from "../constants/action-types";


const intialState = {
  products: [
  ]
};

export const productsReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};

export const selectedProductsReducer = (state = {}, { type, payload }) => {
  console.log(type);
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
};
export const removeSelectedProduct = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};



// cart reducer



/**
* 
* item: ICartItem = {
*  product,
*  quantity: number,
* }
* 
*/
export const cartReducer = (state = { items: [] }, action) => {
  switch (action.type) {
      case ActionTypes.CLEAR_CART:
          return { items: [] };
      case ActionTypes.UPDATE_CART_ITEM:
          const item = action.item;
          if (item && item.quantity > 0) {
              const index = state.items.findIndex(it => it.product._id === item.product._id);
              const newItems = [...state.items];
              if (index !== -1) {
                  newItems[index] = { ...item };
                  return { ...state, items: newItems };
              } else {
                  newItems.push({ ...item });
              }
              return { ...state, items: newItems };
          } else {
              const items = state.items.filter(it => it.product._id !== item.product._id);
              return { ...state, items };
          }

      case ActionTypes.UPDATE_CART_ITEM_QUANTITY:
          const quantity = action.quantity;
          const product = action.product;

          if (quantity === 0) {
              const items = state.items.filter(it => it.product._id !== product._id);
              return { ...state, items };
          } else {
              const index = state.items.findIndex(it => it.product._id === product._id);
              if (index !== -1) {
                  const newItems = [...state.items];
                  const item = { ...state.items[index], quantity };
                  newItems[index] = { ...item };
                  return { ...state, items: newItems };
              } else {
                  // pass, should never happen
              }
          }
          return state;

      default:
          return state;
  }
};