import productsReducer, { $$initialState as $$productsState } from './productsReducer';
import railsContextReducer, { initialState as railsContextState } from './railsContextReducer';

export default {
  $$productsStore: productsReducer,
  railsContext: railsContextReducer,
};

export const initialStates = {
  $$productsState,
  railsContextState
};
