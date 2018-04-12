/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

export default class Purchase extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.text}>Total: </Text>
          <Text style={styles.value}> R$ {this.props.value}</Text>
        </View>

        <TouchableOpacity style={styles.button} onPress={() => this.props.onPress()}>
          <Text style={styles.buttonText}>COMPRAR</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 55,
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: '#ccc',
    justifyContent: 'space-between',
    elevation: 1,
  },
  text: {
    color: '#000',
    fontSize: 18,
  },
  value: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#7325A1',
    elevation: 2,
    paddingVertical: 7,
    paddingHorizontal: 18,
    borderRadius: 2,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 13,
  }
});
