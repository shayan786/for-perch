import App from './App';
import RouterApp from './ClientRouterApp';
import routerProductsStore from '../store/routerProductsStore';
import productsStore from '../store/productsStore';
import NavigationBarApp from './NavigationBarApp';
import ReactOnRails from 'react-on-rails';
import CartContainer from '../containers/CartContainer';

ReactOnRails.setOptions({
  traceTurbolinks: TRACE_TURBOLINKS, // eslint-disable-line no-undef
});

ReactOnRails.register({
  App,
  RouterApp,
  NavigationBarApp,
  CartContainer
});

ReactOnRails.registerStore({
  routerProductsStore,
  productsStore,
});
