import requestsManager from 'libs/requestsManager';
import * as actionTypes from '../constants/productsConstants';

export function setIsFetching() {
  return {
    type: actionTypes.SET_IS_FETCHING,
  };
}

export function setIsSaving() {
  return {
    type: actionTypes.SET_IS_SAVING,
  };
}

export function fetchProductsSuccess(data) {
  return {
    type: actionTypes.FETCH_PRODUCTS_SUCCESS,
    products: data.products,
  };
}

export function fetchProductsFailure(error) {
  return {
    type: actionTypes.FETCH_PRODUCTS_FAILURE,
    error,
  };
}

export function addProductToCart(product) {
  return {
    type: actionTypes.ADD_PRODUCT_TO_CART,
    product
  }
}

export function removeProductFromCart(product) {
  return {
    type: actionTypes.REMOVE_PRODUCT_FROM_CART,
    product
  }
}

export function submitProductSuccess(product) {
  return {
    type: actionTypes.SUBMIT_PRODUCT_SUCCESS,
    product,
  };
}

export function submitProductFailure(error) {
  return {
    type: actionTypes.SUBMIT_PRODUCT_FAILURE,
    error,
  };
}

export function fetchProducts() {
  return dispatch => {
    dispatch(setIsFetching());
    return (
      requestsManager
        .fetchEntities()
        .then(res => dispatch(fetchProductsSuccess(res.data)))
        .catch(res => dispatch(fetchProductsFailure(res.data)))
    );
  };
}

export function submitProduct(product) {
  return dispatch => {
    dispatch(setIsSaving());
    return (
      requestsManager
        .submitEntity({ product })
        .then(res => dispatch(submitProductSuccess(res.data)))
        .catch(res => dispatch(submitProductFailure(res.data)))
    );
  };
}
