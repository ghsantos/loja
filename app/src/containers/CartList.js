/* @flow */

import React, { Component } from 'react';
import {
  View,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Header from '../components/Header';
import Purchase from '../components/Purchase';
import ProductCart from '../components/ProductCart';

export default class CartList extends Component {
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
        />
        <ScrollView>
          <ProductCart
            onPress={() => {}}
            image='https://cdn.pixabay.com/photo/2018/01/08/02/34/technology-3068617_960_720.jpg'
            title='IPhone X'
            price='5400'
            amount={1}
            onPressAmountPlus={() => {}}
            onPressAmountMinus={() => {}}
            onPressRemove={() => {}}
          />
          <ProductCart
            onPress={() => {}}
            image='https://cdn.pixabay.com/photo/2018/03/07/00/59/technology-3205024_960_720.jpg'
            title='IPhone X'
            price='5400'
            amount={1}
            onPressAmountPlus={() => {}}
            onPressAmountMinus={() => {}}
            onPressRemove={() => {}}
          />
          <ProductCart
            onPress={() => {}}
            image='https://cdn.pixabay.com/photo/2015/09/25/06/08/headphones-956720_960_720.jpg'
            title='IPhone X'
            price='5400'
            amount={2}
            onPressAmountPlus={() => {}}
            onPressAmountMinus={() => {}}
            onPressRemove={() => {}}
          />
        </ScrollView>

        <Purchase value={178.90} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
