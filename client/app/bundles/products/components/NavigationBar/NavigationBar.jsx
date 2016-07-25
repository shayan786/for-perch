import React, {PropTypes} from 'react';
import ReactOnRails from 'react-on-rails';
import Button from 'react-bootstrap/lib/Button';
import { Link } from 'react-router';

const NavigationBar = (props) => {
  const { cartCount } = props;

  return (    
    <nav>
      <Link to="/" style={{marginRight: '10px'}}>
        <Button>Home</Button>
      </Link>
      <Link to="cart">
        <Button>{`${cartCount} - Cart`}</Button>
      </Link>
    </nav>
  );
};

NavigationBar.propTypes = {
  cartCount: PropTypes.number
};

export default NavigationBar;
