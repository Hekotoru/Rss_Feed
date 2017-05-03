/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button
} from 'react-native';

import SideMenu from 'react-native-side-menu';
import Menu from './menu/Menu';
import CustomButton from './Button';
import GeneralView from './GeneralView';

class App extends Component {
    state = {
    isOpen: false,
    selectedItem: 'Home',
  };

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  updateMenuState(isOpen) {
    this.setState({ isOpen, });
  }

  onMenuItemSelected = (item) => {
    this.setState({
      isOpen: false,
      selectedItem: item,
    });
  }
  render() {
     const menu = <Menu onItemSelected={this.onMenuItemSelected} />;
    return (
      <SideMenu menu={menu}>
        <View>
        <GeneralView menuSelected ={this.state.selectedItem} />
        </View>           
       </SideMenu>
    );
  }
}

const styles = StyleSheet.create({
  MenuButton: {
    position: 'absolute',
    top: 20,
    padding: 10,
  },
  caption: {
    fontSize: 20,
    fontWeight: 'bold',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  header: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 0,
    textAlign: 'center',
    backgroundColor: 'gray',
    color: '#1c57a4'
  },
  Button: {
    flex: 1,
    flexDirection: 'row',
    width: 20,
    height: 20,
  },
});

module.exports = App;