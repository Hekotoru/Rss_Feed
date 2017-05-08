import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  ListView,
  View,
  TouchableHighlight,
  Button,
  ScrollView,
  Modal,
} from 'react-native';


import ActionButton from 'react-native-action-button';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { DELETE_CHANNEL } from '../Actions/ChannelActions';


function mapStateToProps(state) {
  return { channels: state.Channels.channels};
}
function mapDispatchToProps(dispatch) {
  return { 
      deleteChannel: (item) => {
        dispatch({type: DELETE_CHANNEL,});
        //alert('Channel deleted');
     }
  }
}

class ManageChannel extends Component {
      constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),
      Tags: null,
      selectedItem: 'All',
      modalVisible: false,
    }
  }
    componentDidMount() {
    this.fetchData();
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  fetchData() {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(this.props.channels),
        Feeds: this.props.channels,
      })
  }
  render() {
    return (
        <ScrollView>
      <ListView style={styles.listView} dataSource={this.state.dataSource}
        renderRow={this.renderSingleFeed.bind(this)} />
        <ActionButton   style={styles.addButton}
                        buttonColor="rgba(231,76,60,1)"
                        onPress={()=> Actions.AddChannel({type: 'push'})}/>
      <Modal
          animationType={"slide"}
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {alert("Modal has been closed.")}}
          >
          <View style={styles.ModaContainer}>
          <View>
            <Text style={styles.title}>Edit</Text>
            <Text style={styles.title} onPress={this.props.deleteChannel(this.state)}>Delete</Text>
          </View>
            <TouchableHighlight onPress={() => {
              this.setModalVisible(!this.state.modalVisible)
              }}>
              <Text style={{marginTop: 150, fontSize: 28}}>Close</Text>
            </TouchableHighlight>
         </View>
       </Modal>
        </ScrollView>
    );
  }

  renderSingleFeed(Channel) {
    return (
    <TouchableHighlight onPress={() => {
              this.setModalVisible(!this.state.modalVisible)
      }}>
    <View style={styles.container}>
        <View style = {styles.listData}>
          <Text style={styles.title}>{Channel.channelName}</Text>
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
  addButton: {
    height: 22,
  },
  ModaContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF', 
  }
});

module.exports = connect(mapStateToProps,mapDispatchToProps)(ManageChannel);