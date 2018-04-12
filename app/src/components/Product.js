/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

import metrics from '../styles/metrics';

export default class Product extends Component {
  render() {
    return (
      <TouchableOpacity onPress={() => this.props.onPress()} style={styles.container}>
        <Image source={{ uri: this.props.image }} style={styles.image} />

        <View style={styles.details}>
          <Text style={styles.title} numberOfLines={1}>
            {this.props.title}
          </Text>
          <Text style={styles.price}>
            R$ {this.props.price}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: (metrics.width / 2) * 0.98,
    height: (metrics.width / 2),
    elevation: 2,
    borderRadius: 4,
    marginTop: 4,
    alignItems: 'center',
  },
  image: {
    width: (metrics.width / 2) * 0.97,
    height: (metrics.width / 2) * 0.8,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  details: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  title: {
    width: '60%'
  },
  price: {
    fontSize: 12
  },
});
