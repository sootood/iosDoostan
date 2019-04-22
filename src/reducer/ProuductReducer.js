import {
    FAILD_PRODUCT_LIST,
    FETCH_PRODUCT_LIST,
  } from '../actions/types';
  
  const INITIOAL_STATE = { products: '',  error: '' };
  export default (state = INITIOAL_STATE, action) => {
    console.log(action);
    switch (action.type) {
      case FETCH_PRODUCT_LIST:
        return { ...state, products: action.payload.data.data };
      case FAILD_PRODUCT_LIST:
        return { ...state, products: null, error: action.payload };

      default:
        return state;
    }
  };
  