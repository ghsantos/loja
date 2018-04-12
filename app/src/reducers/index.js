import { combineReducers } from 'redux';
import { NavigationActions } from 'react-navigation';

import { AppNavigator } from '../navigators/AppNavigator';
import { getIndex } from '../utils';
import data from '../data.json';

const initialAppReducerState = {
  products: data,
  productToDetails: {},
  cartList: [],
  priceSum: 0,
  totalProducts: 0,
};

function appReducer(state = initialAppReducerState, action) {
  let nextState;
  let index;
  let cartList;

  switch (action.type) {
    case 'PURCHASE':
    case 'ADD_TO_CART':
      cartList = [...state.cartList];

      index = cartList.findIndex(
        (cartProduct) => (cartProduct.productId === action.cartProduct.productId)
      );

      if (index !== -1) {
        cartList.splice(index, 1);
      }

      nextState = { ...state, cartList: [...cartList, action.cartProduct] };
      break;

    case 'REMOVE_TO_CART':
      cartList = [...state.cartList];

      index = cartList.findIndex((cartProduct) => (cartProduct.productId === action.productId));
      cartList.splice(index, 1);

      nextState = { ...state, cartList: [...cartList] };
      break;

    case 'AMOUNT_PLUS':
      cartList = [...state.cartList];

      index = cartList.findIndex((cartProduct) => (cartProduct.productId === action.productId));
      cartList[index].amount++;

      nextState = { ...state, cartList: [...cartList] };
      break;

    case 'AMOUNT_MINUS':
      cartList = [...state.cartList];

      index = cartList.findIndex((cartProduct) => (cartProduct.productId === action.productId));

      if (cartList[index].amount > 1) {
        cartList[index].amount--;
      }

      nextState = { ...state, cartList: [...cartList] };
      break;

    case 'PURCHASE_ALL':
      nextState = { ...state, cartList: [] };
      break;

    default:
      nextState = { ...state };
  }

  if (nextState.cartList.length > 0) {
    const totalProducts = nextState.cartList.reduce((total, cartProduct) => (
      total + cartProduct.amount
    ), 0);

    const priceSum = nextState.cartList.reduce((sum, cartProduct) => {
      const price = nextState.products[getIndex(nextState.products, cartProduct.productId)].price;
      return sum + (cartProduct.amount * price);
    }, 0);

    nextState = {
      ...nextState,
      totalProducts,
      priceSum,
    };
  } else {
    nextState = {
      ...nextState,
      totalProducts: 0,
      priceSum: 0,
    };
  }

  //console.log(nextState);

  return nextState;
}

const initialNavState = AppNavigator.router.getStateForAction(
  AppNavigator.router.getActionForPathAndParams('Home')
);

function nav(state = initialNavState, action) {
  let nextState;
  switch (action.type) {
    case 'PURCHASE':
    case 'NAV_CART_LIST':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'CartList' }),
        state,
      );
      break;

    case 'NAV_PRODUCT_DETAILS':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({
          routeName: 'ProductDetails',
          params: { productToDetails: action.product }
        }),
        state,
      );
      break;

    default:
      nextState = AppNavigator.router.getStateForAction(
        action,
        state
      );
      break;
  }

  return nextState;
}

const AppReducer = combineReducers({
  nav,
  appReducer,
});

export default AppReducer;
