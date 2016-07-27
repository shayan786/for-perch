import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import NavigationBar from '../components/NavigationBar/NavigationBar';
import * as productsActionCreators from '../actions/productsActionCreators';
import BaseComponent from 'libs/components/BaseComponent';

function stateToProps(state) {
  // Which part of the Redux global state does our component want to receive as props?
  if (state.$$cartsStore) {
    return {
      cartCount: state.$$cartsStore.get('$$products').size,
      pathname: state.railsContext.pathname,
    };
  } else {
    return { };
  }
}

class NavigationBarContainer extends BaseComponent {
  static propTypes = {
    cartCount: PropTypes.number.isRequired,
    pathname: PropTypes.string.isRequired,
  };

  render() {
    const { cartCount, pathname } = this.props;

    return (
      <NavigationBar {...{ cartCount, pathname }} />
    );
  }
}

// Don't forget to actually use connect!
export default connect(stateToProps)(NavigationBarContainer);
