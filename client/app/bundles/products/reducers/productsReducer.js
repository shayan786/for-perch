/* eslint new-cap: 0 */

import Immutable from 'immutable';

import * as actionTypes from '../constants/productsConstants';

export const $$initialState = Immutable.fromJS({
  $$products: [],
  fetchProductError: null,
  submitProductError: null,
  isFetching: false,
  isSaving: false,
});

export default function productsReducer($$state = $$initialState, action = null) {
  const { type, product, products, cartId, error } = action;

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

    case actionTypes.SUBMIT_PRODUCT_SUCCESS: {
      return $$state.withMutations(state => (
        state
          .updateIn(
            ['$$products'],
            $$products => $$products.unshift(Immutable.fromJS(product))
          )
          .merge({
            submitProductError: null,
            isSaving: false,
          })
      ));
    }

    case actionTypes.SUBMIT_PRODUCT_FAILURE: {
      return $$state.merge({
        submitProductError: error,
        isSaving: false,
      });
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
