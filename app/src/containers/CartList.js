/* @flow */

import React, { Component } from 'react';
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Header from '../components/Header';
import Purchase from '../components/Purchase';
import ProductCart from '../components/ProductCart';
import { getIndex } from '../utils';

class CartList extends Component {
  purchaseAll() {
    if (this.props.cartList.length) {
      Alert.alert('Produtos comprados');
      this.props.purchaseAll();
    }
  }

  emptyState() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Icon name='cart' size={85} color='#CFCFCF' />
        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>
          Nenhum produto adicionado no carrinho
        </Text>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Header
          title={
            <Text style={styles.headerTitle}>Carrinho de Compras</Text>
          }
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

        {this.props.cartList.length ?
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
                    onPressAmountPlus={() => this.props.amountPlus(product.id)}
                    onPressAmountMinus={() => this.props.amountMinus(product.id)}
                    onPressRemove={() => this.props.removeToCart(product.id)}
                    key={product.id}
                  />
                );
              })
            }
          </ScrollView>
        : this.emptyState() }

        <Purchase
          value={this.props.priceSum}
          onPress={() => this.purchaseAll()}
        />
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
  amountPlus: (productId) => dispatch({ type: 'AMOUNT_PLUS', productId }),
  amountMinus: (productId) => dispatch({ type: 'AMOUNT_MINUS', productId }),
  purchaseAll: () => dispatch({ type: 'PURCHASE_ALL' }),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartList);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 19,
    fontWeight: 'bold'
  },
});
