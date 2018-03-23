/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Header from '../components/Header';
import Cart from '../components/Cart';
import metrics from '../styles/metrics';

export default class ProductDetails extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header
          headerLeft={
            <TouchableOpacity>
              <Icon
                name='arrow-left'
                size={30}
                color='white'
              />
            </TouchableOpacity>
          }
          headerRight={
            <Cart value={2} onPress={() => {}} />
          }
        />

        <Image
          source={{ uri: 'https://cdn.pixabay.com/photo/2018/01/08/02/34/technology-3068617_960_720.jpg' }}
          style={styles.image}
        />

        <View style={styles.details}>
          <Text style={styles.title}>IPhone X</Text>
          <Text style={styles.price}>R$ 5400.00</Text>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 10 }}>
          <TouchableOpacity style={[styles.button, { backgroundColor: '#4888EF' }]}>
            <Text>Adicionar ao carrinho</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button, { backgroundColor: '#8AE234' }]}>
            <Text>Comprar</Text>
          </TouchableOpacity>
        </View>

        <View style={{ margin: 10 }}>
          <Text style={{ fontSize: 16 }}>
            Descrição do produto:
          </Text>
          <Text>
            Quam dictum cras nulla integer primis potenti faucibus blandit nunc,
            tortor tristique pharetra mattis eros netus hendrerit vivamus tempor conubia.
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: metrics.width * 0.75,
  },
  details: {
    margin: 10,
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
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    elevation: 1,
    borderRadius: 2,
  },
});
