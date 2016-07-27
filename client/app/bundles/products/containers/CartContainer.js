import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as cartsActionCreators from '../actions/cartsActionCreators';
import BaseComponent from 'libs/components/BaseComponent';
import Button from 'react-bootstrap/lib/Button';
import css from './Cart.scss';

function select(state) {
  // Which part of the Redux global state does our component want to receive as props?
  return { data: state.$$cartsStore };
}

class CartContainer extends BaseComponent {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired,
    location: PropTypes.shape({
      state: PropTypes.object,
    }).isRequired
  };

  _renderProductRow($$product, i, actions) {
    return (
      <div className={css.row} key={i}>
        <div className={css.img}>
          <img src={$$product.get('image')} />
        </div>
        <div className={css.title}>
          {$$product.get('title')}
        </div>
        <div className={css.price}>
          {`$ ${$$product.get('price').toFixed(2)}`}
        </div>
        <Button
          onClick={() => actions.removeProductFromCart($$product, i)}>
          Remove
        </Button>
      </div>
    );
  }

  _renderCartSummary($$products) {
    let subtotal = 0;

    $$products.map(($$product) => {
      subtotal += $$product.get('price');
    });

    const TAX_RATE = 0.0865;
    const tax = subtotal * TAX_RATE;

    return (
      <div className={css.summary}>
        <div className={css.row}>
          <div className={css.img} />
          <div className={css.title}>
            SubTotal
          </div>
          <div className={css.price}>
            {`$${(subtotal).toFixed(2)}`}
          </div>
        </div>

        <div className={css.row}>
          <div className={css.img} />
          <div className={css.title}>
            Tax
          </div>
          <div className={css.price}>
            {`$${tax.toFixed(2)}`}
          </div>
        </div>

        <div className={css.row}>
          <div className={css.img} />
          <div className={css.title}>
            Total
          </div>
          <div className={css.price}>
            {`$${(tax + subtotal).toFixed(2)}`}
          </div>
        </div>
      </div>
    );
  }

  render() {
    const { data, dispatch } = this.props;
    const actions = bindActionCreators(cartsActionCreators, dispatch);

    const cartItems = 
      data.get('$$products').map(($$product, i) => 
        this._renderProductRow($$product, i, actions)
      );
    const cartSummary = this._renderCartSummary(data.get('$$products'));

    return data.get('$$products').size > 0
    ? (
        <div className={css.cart}>
          {cartItems}
          {cartSummary}
        </div>
      )
    : (
        <div className={css.cart}>
          <h1> Cart is Empty </h1>
        </div>
      )
  }
}

// Don't forget to actually use connect!
export default connect(select)(CartContainer);
