/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Header from '../components/Header';
import Cart from '../components/Cart';
import Product from '../components/Product';

export default class Home extends Component {
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
            <Cart value={2} onPress={() => {}} />
          }
        />

        <ScrollView>
          <View style={styles.productList}>
            <Product
              onPress={() => {}}
              image='https://cdn.pixabay.com/photo/2018/01/08/02/34/technology-3068617_960_720.jpg'
              title='IPhone X'
              price='5400'
            />

            <Product
              onPress={() => {}}
              image='https://cdn.pixabay.com/photo/2018/03/07/00/59/technology-3205024_960_720.jpg'
              title='IPhone X'
              price='5400'
            />

            <Product
              onPress={() => {}}
              image='https://cdn.pixabay.com/photo/2018/01/08/02/34/technology-3068617_960_720.jpg'
              title='IPhone X'
              price='5400'
            />

            <Product
              onPress={() => {}}
              image='https://cdn.pixabay.com/photo/2014/10/31/10/01/lens-510535_960_720.jpg'
              title='IPhone X'
              price='5400'
            />
            <Product
              onPress={() => {}}
              image='https://cdn.pixabay.com/photo/2018/01/08/02/34/technology-3068617_960_720.jpg'
              title='IPhone X'
              price='5400'
            />

            <Product
              onPress={() => {}}
              image='https://cdn.pixabay.com/photo/2014/10/31/10/01/lens-510535_960_720.jpg'
              title='IPhone X'
              price='5400'
            />

            <Product
              onPress={() => {}}
              image='https://cdn.pixabay.com/photo/2018/03/07/00/59/technology-3205024_960_720.jpg'
              title='IPhone X'
              price='5400'
            />

            <Product
              onPress={() => {}}
              image='https://cdn.pixabay.com/photo/2018/01/08/02/34/technology-3068617_960_720.jpg'
              title='IPhone X'
              price='5400'
            />

            <Product
              onPress={() => {}}
              image='https://cdn.pixabay.com/photo/2014/10/31/10/01/lens-510535_960_720.jpg'
              title='IPhone X'
              price='5400'
            />
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
  productList: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-around',
  }
});
