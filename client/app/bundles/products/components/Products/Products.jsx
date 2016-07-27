import React, { PropTypes } from 'react';

import Product from './Product.jsx';
import BaseComponent from 'libs/components/BaseComponent';
import css from './Products.scss';

export default class Products extends BaseComponent {

  static propTypes = {
    products: PropTypes.object.isRequired,
    cart: PropTypes.object.isRequired
  };

  _renderProducts($$products) {
    return (
      $$products.map($$product =>
        <Product 
          key={$$product.get('id')}
          product={$$product}
          handleAddToCartClick={this.props.cartsActions.addProductToCart}
        />
      )
    )
  }

  componentDidMount () {
    const { cart } = this.props;

    if (!cart.get('cartId'))
      this.props.cartsActions.fetchNewCart();
  }

  render() {
    const { products } = this.props;

    return (
      <div className={css.products}>
        {this._renderProducts(products.get('$$products'))}
      </div>
    );
  }
}
