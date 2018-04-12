import React from 'react';
import { BackHandler } from 'react-native';
import { connect } from 'react-redux';
import { StackNavigator, addNavigationHelpers, NavigationActions } from 'react-navigation';

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

class AppWithNavigationState extends React.Component {
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
  }
  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
  }
  onBackPress = () => {
    const { dispatch, nav } = this.props;
    if (nav.index === 0) {
      return false;
    }
    dispatch(NavigationActions.back());
    return true;
  };

  render() {
    const { dispatch, nav } = this.props;
    const navigation = addNavigationHelpers({
      dispatch,
      state: nav,
      addListener: () => {},
    });

    return <AppNavigator navigation={navigation} />;
  }
}

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);
