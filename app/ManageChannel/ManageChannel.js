import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  ListView,
  View,
  TouchableHighlight
} from 'react-native';

const TAG_TYPES = ['Channel World','Channel Sports','Channel Health','Channel Art','Channel Technology & Science'];

class ManageChannel extends Component {
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
        dataSource: this.state.dataSource.cloneWithRows(TAG_TYPES),
        Feeds: TAG_TYPES,
      })
  }
  render() {
    return (
      <ListView style={styles.listView} dataSource={this.state.dataSource}
        renderRow={this.renderSingleFeed.bind(this)} />
    );
  }

  renderSingleFeed(Feed) {
    return (
    <TouchableHighlight>
    <View style={styles.container}>
        <View style = {styles.listData}>
          <Text onPress={() => this.props.onTagClick(Feed)} style={styles.title}>{Feed}</Text>
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
      fontSize: 20,
  },
  listView: {
     marginTop: 50,
  },
});

module.exports = ManageChannel;