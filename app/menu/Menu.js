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


class Menu extends Component {
  static propTypes = {
    onItemSelected: React.PropTypes.func.isRequired,
  };

  render() {
    return (
      <ScrollView scrollsToTop={false} style={styles.menu}>

        <Text
          onPress={() => this.props.onItemSelected('Home')}
          style={styles.item}>
          Home
        </Text>
        <Text
          onPress={() => this.props.onItemSelected('Tags')}
          style={styles.item}>
          Tags
        </Text>

        <Text
          onPress={() => this.props.onItemSelected('Manage channels')}
          style={styles.item}>
          Manage channels
        </Text>
      </ScrollView>
    );
  }
}

const window = Dimensions.get('window');
const styles = StyleSheet.create({
  menu: {
    flex: 1,
    width: window.width,
    height: window.height,
    backgroundColor: '#F5FCFF',
    padding: 20,
  },
  item: {
    fontSize: 14,
    fontWeight: '300',
    paddingTop: 5,
  },
});


module.exports = Menu;