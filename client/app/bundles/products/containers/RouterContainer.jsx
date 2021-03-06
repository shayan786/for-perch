import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Products from '../components/Products/Products.jsx';
import * as productsActionCreators from '../actions/productsActionCreators';
import * as cartsActionCreators from '../actions/cartsActionCreators';
import BaseComponent from 'libs/components/BaseComponent';

function select(state) {
  // Which part of the Redux global state does our component want to receive as props?
  return { 
    products: state.$$productsStore,
    cart: state.$$cartsStore
  };
}

class RouterContainer extends BaseComponent {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    products: PropTypes.object.isRequired,
    cart: PropTypes.object.isRequired,
    location: PropTypes.shape({
      state: PropTypes.object,
    }).isRequired,
  };

  render() {
    const { dispatch, products, cart } = this.props;
    const productsActions = bindActionCreators(productsActionCreators, dispatch);
    const cartsActions = bindActionCreators(cartsActionCreators, dispatch);
    const locationState = this.props.location.state;

    return (
      <Products {...{ productsActions, cartsActions, products, cart, locationState }} />
    );
  }
}

// Don't forget to actually use connect!
export default connect(select)(RouterContainer);
