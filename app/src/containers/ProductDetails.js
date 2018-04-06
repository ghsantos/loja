/* @flow */

import React, { Component } from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Header from '../components/Header';
import Cart from '../components/Cart';
import Amount from '../components/Amount';
import metrics from '../styles/metrics';

class ProductDetails extends Component {
  state = {
    amount: 1,
  }

  onPressAmountPlus() {
    const { amount } = this.state;

    this.setState({ amount: amount + 1 });
  }

  onPressAmountMinus() {
    const { amount } = this.state;

    if (amount > 1) {
      this.setState({ amount: amount - 1 });
    }
  }

  render() {
    const product = this.props.product;

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
          headerRight={
            <Cart
              value={this.props.totalProducts}
              onPress={this.props.cartListScreen}
            />
          }
        />

        <ScrollView>
          <Image
            source={{ uri: product.image }}
            style={styles.image}
          />

          <View style={styles.content}>
            <View>
              <Text style={styles.title}>{product.title}</Text>
              <Text style={styles.price}>R$ {product.price}</Text>
            </View>

            <View style={{ flexDirection: 'row', marginTop: 5, alignItems: 'center' }}>
              <Text style={{ marginRight: 5 }}>Quantidade</Text>

              <Amount
                amount={this.state.amount}
                onPressPlus={() => this.onPressAmountPlus()}
                onPressMinus={() => this.onPressAmountMinus()}
              />
            </View>

            <View style={styles.buttonContainer}>
              <TouchableOpacity
                onPress={() => this.props.addToCart(product, this.state.amount)}
                style={[styles.button, { backgroundColor: '#4888EF' }]}
              >
                <Text>Adicionar ao carrinho</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => this.props.purchase(product, this.state.amount)}
                style={[styles.button, { backgroundColor: '#8AE234' }]}
              >
                <Text>Comprar</Text>
              </TouchableOpacity>
            </View>

            <View>
              <Text style={{ fontSize: 16 }}>
                Descrição do produto:
              </Text>
              <Text>{product.description}</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  product: state.appReducer.productToDetails,
  totalProducts: state.appReducer.totalProducts,
});

const mapDispatchToProps = dispatch => ({
  cartListScreen: () => dispatch({ type: 'NAV_CART_LIST' }),
  purchase: (product, amount) => dispatch({
    type: 'PURCHASE',
    cartProduct: { productId: product.id, amount },
  }),
  addToCart: (product, amount) => dispatch({
    type: 'ADD_TO_CART',
    cartProduct: { productId: product.id, amount },
  }),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: metrics.width * 0.75,
  },
  content: {
    marginTop: 10,
    marginHorizontal: 10,
  },
  title: {
    fontSize: 20,
    color: '#000',
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#222',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    elevation: 1,
    borderRadius: 2,
  },
});
