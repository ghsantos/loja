/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import Amount from './Amount';

export default class ProductCart extends Component {
  render() {
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={() => this.props.onPress()}
      >
        <Image source={{ uri: this.props.image }} style={styles.image} />

        <View style={styles.content}>
          <View style={styles.line}>
            <Text>{this.props.title}</Text>
            <Text>R$ {this.props.price}</Text>
          </View>

          <View style={styles.line}>
            <TouchableOpacity
              onPress={() => this.props.onPressRemove()}
              style={styles.removeButton}
            >
              <Text style={styles.removeText}>remover</Text>
            </TouchableOpacity>

            <Amount
              amount={this.props.amount}
              onPressPlus={() => this.props.onPressAmountPlus()}
              onPressMinus={() => this.props.onPressAmountMinus()}
            />
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: '#DDD',
    borderBottomWidth: 1,
    borderColor: '#EEE',
  },
  image: {
    height: 80,
    width: 80,
    borderRadius: 3,
  },
  content: {
    marginLeft: 15,
    marginRight: 10,
    flex: 1,
  },
  line: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  removeButton: {
    backgroundColor: '#F44336',
    elevation: 1,
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 2,
  },
  removeText: {
    color: '#fff',
    fontSize: 11,
  },
});
