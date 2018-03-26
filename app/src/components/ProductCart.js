/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class ProductCart extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={{ uri: this.props.image }} style={styles.image} />

        <View style={styles.content}>
          <View style={styles.line}>
            <Text>{this.props.title}</Text>
            <Text>R$ {this.props.price}</Text>
          </View>

          <View style={styles.line}>
            <TouchableOpacity
              onPress={() => this.props.onPressRemove}
              style={styles.removeButton}
            >
              <Text style={styles.removeText}>remover</Text>
            </TouchableOpacity>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <TouchableOpacity
                onPress={() => this.props.onPressAmountMinus}
                style={styles.amountModify}
              >
                <Icon
                  name='minus'
                  size={12}
                  color='#555'
                />
              </TouchableOpacity>

              <Text>{this.props.amount}</Text>

              <TouchableOpacity
                onPress={() => this.props.onPressAmountPlus}
                style={styles.amountModify}
              >
                <Icon
                  name='plus'
                  size={12}
                  color='#555'
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
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
    paddingVertical: 2,
    paddingHorizontal: 7,
    borderRadius: 2,
  },
  removeText: {
    color: '#fff',
    fontSize: 11,
  },
  amountModify: {
    margin: 3,
    padding: 3,
    backgroundColor: '#fff',
    borderRadius: 20,
  }
});
