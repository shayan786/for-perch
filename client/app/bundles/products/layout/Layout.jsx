import React, { PropTypes } from 'react';
import BaseComponent from 'libs/components/BaseComponent';
import NavigationBarContainer from '../containers/NavigationBarContainer';

import './Layout.scss';

export default class Layout extends BaseComponent {

  static propTypes = {
    children: PropTypes.object.isRequired,
  };

  render() {
    return (
      <main>
        <NavigationBarContainer />
        {this.props.children}
      </main>
    );
  }
}
