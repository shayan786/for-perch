import requestsManager from 'libs/requestsManager';
import * as actionTypes from '../constants/cartsConstants';

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
    cartId: data.cartId
  };
}

export function fetchProductsFailure(error) {
  return {
    type: actionTypes.FETCH_PRODUCTS_FAILURE,
    error,
  };
}

export function createNewCart(cartId) {
  return {
    type: actionTypes.CREATE_NEW_CART,
    cartId
  }
}

export function fetchNewCart() {
  return dispatch => {
    return (
      requestsManager
        .createNewCart()
        .then(res => dispatch(createNewCart(res.data.cartId)))
    )
  }
}

export function productAddedToCart(product) {
  return {
    type: actionTypes.ADD_PRODUCT_TO_CART,
    product
  }
}

export function productRemovedFromCart(index) {
  return {
    type: actionTypes.REMOVE_PRODUCT_FROM_CART,
    index
  }
}

export function removeProductFromCart(product, index) {
  return dispatch => {
    /* No error handling/loading...oh well, lets assume it works ;) */
    return (
      requestsManager
        .removeProductFromCart(product.get('id'))
        .then(res => dispatch(productRemovedFromCart(index)))
      )
  }
}

export function addProductToCart(product) {
  return (dispatch, getState) => {
    const cartId = getState().$$cartsStore.get('cartId');

    return (
      /* No error handling/loading...oh well, lets assume it works ;) */
      requestsManager
        .addProductToCart(product.get('id'), cartId)
        .then(res => {
          console.log(res)
          dispatch(productAddedToCart(res.data.product))
        })
    )
  }
}

export function fetchProducts(cartId) {
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
