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


function mapStateToProps(state) {
  return { tags: state.Tags.tags};
}

class TagListing extends Component {
      static propTypes = {
    onTagClick: React.PropTypes.func.isRequired,
};
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
      console.log(this.props.tags)
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(this.props.tags),
        Feeds: this.props.tags,
      })
  }
  render() {
    return (
      <ListView style={styles.listView} dataSource={this.state.dataSource}
        renderRow={this.renderSingleFeed.bind(this)} />
    );
  }

  renderSingleFeed(Feed) {
    const goToFeed = () => Actions.Feed({filter: Feed.tag});
    return (
    <TouchableHighlight>
    <View style={styles.container}>
        <View style = {styles.listData}>
          <Text onPress={goToFeed} style={styles.title}>{Feed.tag}</Text>
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
});

module.exports = connect(mapStateToProps)(TagListing);