/* @flow */

import React, { Component } from 'react';
import {
  View,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Header from '../components/Header';
import Purchase from '../components/Purchase';
import ProductCart from '../components/ProductCart';
import { getIndex } from '../utils';

class CartList extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header
          headerLeft={
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <Icon
                name='arrow-left'
                size={30}
                color='white'
              />
            </TouchableOpacity>
          }
        />
        <ScrollView>
          {
            this.props.cartList.map(cartProduct => {
              const product = this.props.products[
                getIndex(this.props.products, cartProduct.productId)
              ];

              return (
                <ProductCart
                  onPress={() => this.props.productDetailsScreen(product)}
                  image={product.image}
                  title={product.title}
                  price={product.price}
                  amount={cartProduct.amount}
                  onPressAmountPlus={() => {}}
                  onPressAmountMinus={() => {}}
                  onPressRemove={() => this.props.removeToCart(product.id)}
                  key={product.id}
                />
              );
            })
          }
        </ScrollView>

        <Purchase value={this.props.priceSum} />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  products: state.appReducer.products,
  cartList: state.appReducer.cartList,
  priceSum: state.appReducer.priceSum,
});

const mapDispatchToProps = dispatch => ({
  productDetailsScreen: (product) => dispatch({ type: 'NAV_PRODUCT_DETAILS', product }),
  removeToCart: (productId) => dispatch({ type: 'REMOVE_TO_CART', productId }),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartList);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
