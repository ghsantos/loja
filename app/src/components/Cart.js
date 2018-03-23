/* @flow */

import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default (props) => (
  <TouchableOpacity onPress={() => props.onPress()}>
    <Icon
      name='cart'
      size={30}
      color='white'
    />
    <View
      style={styles.containerValue}
    >
      <Text style={styles.text}>{props.value}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  containerValue: {
    position: 'absolute',
    top: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    height: 16,
    width: 16,
    borderRadius: 8,
    backgroundColor: '#FF5722',
  },
  text: {
    color: '#fff',
    fontSize: 8
  },
});
