import { compose, createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from 'libs/middlewares/loggerMiddleware';
import reducers, { initialStates } from '../reducers';

export default (props, railsContext) => {
  const initialProducts = props.products;
  const { $$productsState } = initialStates;
  const initialState = {
    $$productsStore: $$productsState.merge({
      $$products: initialProducts,
    }),
    railsContext,
  };

  const reducer = combineReducers(reducers);
  const composedStore = compose(
    applyMiddleware(thunkMiddleware, loggerMiddleware)
  );

  return composedStore(createStore)(reducer, initialState);
};
