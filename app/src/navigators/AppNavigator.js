import React from 'react';
import { connect } from 'react-redux';
import { StackNavigator, addNavigationHelpers } from 'react-navigation';

import Home from '../containers/Home';
import ProductDetails from '../containers/ProductDetails';
import CartList from '../containers/CartList';

export const AppNavigator = StackNavigator(
  {
    Home: { screen: Home },
    ProductDetails: { screen: ProductDetails },
    CartList: { screen: CartList },
  },
  {
    headerMode: 'none',
  }
);

const AppWithNavigationState = ({ dispatch, nav }) => (
  <AppNavigator
    navigation={addNavigationHelpers({ dispatch, state: nav, addListener: () => {} })}
  />
);

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);
