import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  ListView,
  View,
  TouchableHighlight
} from 'react-native';


import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import ActionButton from 'react-native-action-button';
import { ADD_TAGS,SELECT_TAG } from '../Actions/TagsActions';

function mapStateToProps(state) {
  return { tags: state.Tags.tags,};
}

function mapDispatchToProps(dispatch) {
  return { 
      selectedTag: (Tag) => {
        dispatch({type: SELECT_TAG, selected: Tag.id,});
        //dispatch(FeedRequest(Filter));
        //Actions.Home({type:'reset'});
     }
  }
}


class TagListing extends Component {
      constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),
      Tags: null,
      selectedItem: 'All'
    }
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(this.props.tags),
        Feeds: this.props.tags,
      })
  }
  render() {
    return (
      <View>
      <ListView style={styles.listView} dataSource={this.state.dataSource}
        renderRow={this.renderSingleFeed.bind(this)} />
        <ActionButton   style={styles.addButton}
                        buttonColor="rgba(231,76,60,1)"
                        onPress={()=> Actions.AddTag({type: 'push'})}/>
        </View>
    );
  }

  renderSingleFeed(Feed) {
    return (
    <TouchableHighlight>
    <View style={styles.container}>
        <View style = {styles.listData}>
          <Text onPress={()=> this.props.selectedTag(Feed,this.props.channels)} style={styles.title}>{Feed.tag}</Text>
        </View>
      </View>
    </TouchableHighlight>
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
    flex:1,
    borderWidth: 0.2,
  },
  title: {
      fontSize: 27,
  },
  listView: {
     marginTop: 50,
  },
  addButton: {
    height: 22,
  },
});

module.exports = connect(mapStateToProps,mapDispatchToProps)(TagListing);