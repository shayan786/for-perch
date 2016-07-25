import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Products from '../components/Products/Products.jsx';
import * as productsActionCreators from '../actions/productsActionCreators';
import BaseComponent from 'libs/components/BaseComponent';

function select(state) {
  // Which part of the Redux global state does our component want to receive as props?
  return { data: state.$$productsStore };
}

class RouterContainer extends BaseComponent {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired,
    location: PropTypes.shape({
      state: PropTypes.object,
    }).isRequired,
  };

  render() {
    const { dispatch, data } = this.props;
    const actions = bindActionCreators(productsActionCreators, dispatch);
    const locationState = this.props.location.state;

    return (
      <Products {...{ actions, data, locationState }} />
    );
  }
}

// Don't forget to actually use connect!
export default connect(select)(RouterContainer);
