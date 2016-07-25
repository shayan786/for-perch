import React, {PropTypes} from 'react';
import Button from 'react-bootstrap/lib/Button';
import css from './Product.scss';

const Product = (props) => {
  const { product, handleAddToCartClick } = props;

  return (
    <div className={css.product}>
      <img src={product.get('image')} />
      <h3>{product.get('title')}</h3>
      <h4>{`$${product.get('price').toFixed(2)}`}</h4>
      <Button
        onClick={() => handleAddToCartClick(product)} >
        Add To Cart
      </Button>
    </div>
  );
};

export default Product;
