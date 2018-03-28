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
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Header from '../components/Header';
import Cart from '../components/Cart';
import Amount from '../components/Amount';
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

        <ScrollView>
          <Image
            source={{ uri: 'https://cdn.pixabay.com/photo/2018/01/08/02/34/technology-3068617_960_720.jpg' }}
            style={styles.image}
          />

          <View style={styles.content}>
            <View>
              <Text style={styles.title}>IPhone X</Text>
              <Text style={styles.price}>R$ 5400.00</Text>
            </View>

            <View style={{ flexDirection: 'row', marginTop: 5, alignItems: 'center' }}>
              <Text style={{ marginRight: 5 }}>Quantidade</Text>

              <Amount
                amount={4}
                onPressPlus={() => {}}
                onPressMinus={() => {}}
              />
            </View>

            <View style={styles.buttonContainer}>
              <TouchableOpacity style={[styles.button, { backgroundColor: '#4888EF' }]}>
                <Text>Adicionar ao carrinho</Text>
              </TouchableOpacity>

              <TouchableOpacity style={[styles.button, { backgroundColor: '#8AE234' }]}>
                <Text>Comprar</Text>
              </TouchableOpacity>
            </View>

            <View>
              <Text style={{ fontSize: 16 }}>
                Descrição do produto:
              </Text>
              <Text>
                Quam dictum cras nulla integer primis potenti faucibus blandit nunc,
                tortor tristique pharetra mattis eros netus hendrerit vivamus tempor conubia.
                Quam dictum cras nulla integer primis potenti faucibus blandit nunc,
                tortor tristique pharetra mattis eros netus hendrerit vivamus tempor conubia.
                Quam dictum cras nulla integer primis potenti faucibus blandit nunc,
                tortor tristique pharetra mattis eros netus hendrerit vivamus tempor conubia.
              </Text>
            </View>
          </View>
        </ScrollView>
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
