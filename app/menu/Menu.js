/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  Dimensions,
  Image
} from 'react-native';

import { Actions } from 'react-native-router-flux';

class Menu extends Component {
  static propTypes = {
    onItemSelected: React.PropTypes.func.isRequired,
  };

  render() {
    return (
      <ScrollView scrollsToTop={false} style={styles.menu}>
        <Text
          onPress={()=>Actions.Home({type: 'reset'})}
          style={styles.item}>
          Home
        </Text>
        <Text
          onPress={()=>Actions.Tags({type: 'push'})}
          style={styles.item}>
          Tags
        </Text>

        <Text
          onPress={()=> Actions.Channel({type:'push'})}
          style={styles.item}>
          Manage channels
        </Text>
      </ScrollView>
    );
  }
}


const styles = StyleSheet.create({
  menu: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    marginTop: 50,
  },
  item: {
    fontSize: 20,
    fontWeight: '300',
    paddingTop: 5,
  },
});


module.exports = Menu;