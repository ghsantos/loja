/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class Amount extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => this.props.onPressMinus()}
          style={styles.amountModify}
        >
          <Icon
            name='minus'
            size={16}
            color='#555'
          />
        </TouchableOpacity>

        <Text style={{ fontSize: 16 }}>{this.props.amount}</Text>

        <TouchableOpacity
          onPress={() => this.props.onPressPlus()}
          style={styles.amountModify}
        >
          <Icon
            name='plus'
            size={16}
            color='#555'
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  amountModify: {
    margin: 4,
    padding: 3,
    backgroundColor: '#fff',
    borderRadius: 20,
  },
});
