import React, { PropTypes } from 'react';

import Product from './Product.jsx';
import BaseComponent from 'libs/components/BaseComponent';
import css from './Products.scss';

export default class Products extends BaseComponent {

  static propTypes = {
    actions: PropTypes.object.isRequired,
    data: PropTypes.object.isRequired,
    locationState: PropTypes.object,
  };

  _renderProducts($$products) {
    return (
      $$products.map($$product =>
        <Product 
          key={$$product.get('id')}
          product={$$product}
          handleAddToCartClick={this.props.actions.addProductToCart}
        />
      )
    )
  }

  render() {
    const { data, actions } = this.props;

    return (
      <div className={css.products}>
        {this._renderProducts(data.get('$$products'))}
      </div>
    );
  }
}
