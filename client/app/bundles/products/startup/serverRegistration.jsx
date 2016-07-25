// Example of React + Redux
import App from './App';
import RouterApp from './ServerRouterApp';
import ReactOnRails from 'react-on-rails';
import routerProductsStore from '../store/routerProductsStore';
import productsStore from '../store/productsStore';

ReactOnRails.register(
  {
    App,
    RouterApp
  }
);

ReactOnRails.registerStore({
  routerProductsStore,
  productsStore
});
