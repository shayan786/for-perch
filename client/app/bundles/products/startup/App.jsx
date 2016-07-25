import React from 'react';
import { Provider } from 'react-redux';
import NonRouterProductsContainer from '../containers/NonRouterProductsContainer';

export default (_props, _railsContext) => {
  const store = ReactOnRails.getStore('productsStore');

  return (
    <Provider store={store}>
      <NonRouterProductssContainer />
    </Provider>
  );
};
