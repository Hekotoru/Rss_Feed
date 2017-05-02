/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  ListView,
  View
} from 'react-native';

//import FeedApi from 'rss-to-json';
const REQUEST_URL = 'https://api.rss2json.com/v1/api.json?rss_url=http://www.cbc.ca/cmlink/rss-';


class FeedListing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),
      Feeds: null
    }
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    let Tag = 'world';
    console.log(this.props.filter)
    if(this.props.filter != undefined)
    {
        Tag = this.props.filter.toLowerCase();
    }
    console.log(REQUEST_URL + Tag);
    fetch(REQUEST_URL+Tag)
    .then((response) => response.json())
    .then((responseData) => {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(responseData.items),
        Feeds: responseData.feed,
      })
    });
    /*FeedApi.load(REQUEST_URL + Tag, function(err, rss){
        console.log(rss);
    });*/
  }
  render() {
    if(!this.state.Feeds)
    {
      return (
        <View>
          <Text>Loading App...</Text>
        </View>
      )
    }
    return (
      <ListView dataSource={this.state.dataSource}
        renderRow={this.renderSingleFeed} />
    );
  }

  renderSingleFeed(Feed) {
    return (
    <View style={styles.container}>
        <View style = {styles.listData}>
          <Text style ={styles.title}>{Feed.title}</Text>
          <Text>{Feed.author}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  thumbnail: {
    height: 80,
    width: 40,
  },
  listData: {
    flex: 1,
    borderWidth: 0.5,
  },
  title: {
      fontWeight: 'bold'
  }
});

module.exports = FeedListing;