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
import AddChannel from './app/ManageChannel/AddChannel';
import AddTag from './app/Tags/AddTags';
import { Provider, connect } from 'react-redux';
import { createStore} from 'redux';
import RssApp from './app/Reducers';




let store = createStore(RssApp);

/*TODO: Having a problem with the library react-native-router-flux,
        has conflict when im using my custom redux and call an action from the router.
        Maybe creating a redus for the Router,
        tried using this: https://github.com/aksonov/react-native-router-flux/blob/master/docs/REDUX_FLUX.md but fail
*/
export default class Rss_Feed extends Component {

  render() {

    return (
    <Provider store={store}>
      <Router>
          <Scene key="root">
            <Scene key="Home" component={App} title="Home"  initial={true}/>
            <Scene key="Tags" component={TagsListing} title="Tags"/>
            <Scene key="Channel" component={ManageChannel} title="Manage Channel"/>
            <Scene key="AddChannel" component={AddChannel} title="Add Channel"/>
            <Scene key="AddTag" component={AddTag} title="Add Tag"/>
            <Scene key="Feed" component={FeedListing} title="Feed"/>
          </Scene>
      </Router>
    </Provider>
    );
  }
}


AppRegistry.registerComponent('Rss_Feed', () => Rss_Feed);
