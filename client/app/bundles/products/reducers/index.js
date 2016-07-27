import productsReducer, { $$initialState as $$productsState } from './productsReducer';
import cartsReducer, { $$initialState as $$cartsState } from './cartsReducer';
import railsContextReducer, { initialState as railsContextState } from './railsContextReducer';

export default {
  $$productsStore: productsReducer,
  $$cartsStore: cartsReducer,
  railsContext: railsContextReducer,
};

export const initialStates = {
  $$productsState,
  $$cartsState,
  railsContextState
};
