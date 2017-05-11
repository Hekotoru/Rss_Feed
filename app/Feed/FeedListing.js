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


//const REQUEST_URL = 'https://api.rss2json.com/v1/api.json?rss_url=http://www.cbc.ca/cmlink/rss-';
import { connect } from 'react-redux';
import { FeedRequest, CLEAR_STATE} from '../Actions/FeedActions';

function mapStateToProps(state) {
  return { feeds: state.Feeds.feeds,  tags: state.Tags.selected,  channels: state.Channels.channels,};
}

function mapDispatchToProps(dispatch) {
  return { 
      MakeRequest: (URL) => {
        dispatch(FeedRequest(URL));
     },
     ClearData: () => {
       dispatch({type:CLEAR_STATE})
     }
  }
}

class FeedListing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),
      Feeds: null,
      Filter: null,
    }
  }

  filterTag(){
    if( this.state.Filter != null && this.state.Filter.length != 0)
    {
    this.props.MakeRequest(this.state.Filter[0]);
    this.state.Filter.shift();
    }
  }
  componentWillReceiveProps(nextProps) {
     if(this.props.tags !== nextProps.tags)
      {
            //this.props.ClearData();
            let tag = nextProps.tags;
            let channel = nextProps.channels;
            let foo = nextProps.feeds;
            let Filter = [];
            channel.map((item,index) =>{
            if(item.channelTag == tag)
              {
                Filter.push(item.channelUrl);
              }
            });
            this.setState({
              Filter: Filter,
            })
      }
    //console.log(this.props.feeds,nextProps.feeds);
    if (this.props.feeds !== nextProps.feeds) {
    let data = [];
    nextProps.feeds.map((item,index) =>
    {
      item.data.map((datas,index)=>
      {
        data.push(datas); 
      });
    });
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(data),
        Feeds: data
      });
    }
  }
  componentDidMount() {
    this.props.MakeRequest('http://www.cbc.ca/cmlink/rss-world');
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
      <ListView style={styles.listView} dataSource={this.state.dataSource} onEndReached={()=>{this.filterTag()}}
        onEndReachedThreshold={1}
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
  },
    listView: {
     marginTop: 50,
  },
});

module.exports = connect(mapStateToProps,mapDispatchToProps)(FeedListing);