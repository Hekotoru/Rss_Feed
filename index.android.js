/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';


import App from './app/App';
import { Router, Scene } from 'react-native-router-flux';
import FeedListing from './app/Feed/FeedListing';
import TagsListing from './app/Tags/TagListing';
import ManageChannel from './app/ManageChannel/ManageChannel';

export default class Rss_Feed extends Component {

  render() {

    return (
      <Router>
        <Scene key="root">
          <Scene key="Home" component={App} title="Home" initial={true} />
          <Scene key="Tags" component={TagsListing} title="Tags" />
          <Scene key="Channel" component={ManageChannel} title="Channel" />
          <Scene key="Feed" component={FeedListing} title="Feed" />
        </Scene>
      </Router>
    );
  }
}



AppRegistry.registerComponent('Rss_Feed', () => Rss_Feed);
