/* eslint new-cap: 0 */

import Immutable from 'immutable';

import * as actionTypes from '../constants/cartsConstants';

export const $$initialState = Immutable.fromJS({
  $$products: [],
  cartId: null,
  isFetching: false,
  isSaving: false
});

export default function cartsReducer($$state = $$initialState, action = null) {
  const { type, product, products, cartId, error, index } = action;

  switch (type) {

    case actionTypes.FETCH_PRODUCTS_SUCCESS: {
      return $$state.merge({
        $$products: products,
        fetchProductError: null,
        isFetching: false,
      });
    }

    case actionTypes.FETCH_PRODUCTS_FAILURE: {
      return $$state.merge({
        fetchProductError: error,
        isFetching: false,
      });
    }

    // SHOULD HAVE FAIL & SUCCESS...
    case actionTypes.CREATE_NEW_CART: {
      return $$state.merge({
        cartId
      });
    }

    case actionTypes.ADD_PRODUCT_TO_CART: {
      return $$state.withMutations(state => (
        state
          .updateIn(
            ['$$products'],
            $$products => $$products.unshift(Immutable.fromJS(product))
          )
      ));
    }

    case actionTypes.REMOVE_PRODUCT_FROM_CART: {
      return $$state.withMutations(state => (
        state
          .updateIn(
            ['$$products'],
            $$products => $$products.delete(index)
          )
      ));
    }

    case actionTypes.SET_IS_FETCHING: {
      return $$state.merge({
        isFetching: true,
      });
    }

    case actionTypes.SET_IS_SAVING: {
      return $$state.merge({
        isSaving: true,
      });
    }

    default: {
      return $$state;
    }
  }
}
