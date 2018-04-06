/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Header from '../components/Header';
import Cart from '../components/Cart';
import Product from '../components/Product';

class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header
          title={
            <Text style={{ color: '#fff', fontSize: 19, fontWeight: 'bold' }}>Loja</Text>
          }
          headerLeft={
            <Icon
              name='menu'
              size={30}
              color='white'
            />
          }
          headerRight={
            <Cart
              value={this.props.totalProducts}
              onPress={this.props.cartListScreen}
            />
          }
        />

        <ScrollView>
          <View style={styles.productList}>
            {
              this.props.products.map(product =>
                <Product
                  onPress={() => this.props.productDetailsScreen(product)}
                  image={product.image}
                  title={product.title}
                  price={product.price}
                  key={product.id}
                />
              )
            }
          </View>
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  products: state.appReducer.products,
  totalProducts: state.appReducer.totalProducts,
});

const mapDispatchToProps = dispatch => ({
  cartListScreen: () => dispatch({ type: 'NAV_CART_LIST' }),
  productDetailsScreen: (product) => dispatch({ type: 'NAV_PRODUCT_DETAILS', product }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  productList: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-around',
  }
});
