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
  TextInput,
  Picker
} from 'react-native';


import ActionButton from 'react-native-action-button';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { DELETE_CHANNEL, EDIT_CHANNEL } from '../Actions/ChannelActions';


function mapStateToProps(state) {
  console.log(state);
  return { channels: state.Channels.channels, tags: state.Tags.tags,};
}
function mapDispatchToProps(dispatch) {
  return { 
      deleteChannel: (item) => {
        dispatch({type: DELETE_CHANNEL, id: item.channelId});
     },
     editChannel: (item) => {
       dispatch({type: EDIT_CHANNEL, id: item.channelId,channelName: item.channelName, channelTag: item.channelTag, channelUrl : item.channelUrl})
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
      channelName: null,
      channelTag: null,
      channelUrl: null,
      channelId: null,
    }
  }
    componentDidMount() {
    this.fetchData();
  }

  setModalVisible(visible,Channel) {
    if(Channel != null)
    {
      this.setState(
      {
        channelName: Channel.channelName,
        channelTag: Channel.channelTag,
        channelUrl: Channel.channelUrl,
        channelId: Channel.id,
      });
    }
    this.setState({
      modalVisible: visible,
    });
  }
  componentDidUpdate(prevProps, prevState){
    console.log(prevState.dataSource, this.props.channels, this.state.dataSource);
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
          <Text style={styles.welcome}>Channel name</Text>
                <TextInput
                           onChangeText={(text) => this.setState({channelName:text})}
                           value={this.state.channelName}/>
                <Text style={styles.welcome}>Tags</Text>
                <Picker mode="dropdown" selectedValue={this.state.channelTag} onValueChange={(value) => {
                                      this.setState({channelTag: value});}}>
                  {this.props.tags.map((item, index) => {
                    return (<Picker.Item label={item.tag} value={index} key={item.tag}/>) 
                            })}
                  </Picker>
          <Text  style={styles.welcome}>Url</Text>
                          <TextInput 
                           onChangeText={(text) => this.setState({channelUrl:text})}
                           value={this.state.channelUrl}/>
          <View style={styles.ModaContainer}>
          <View>
            <Button onPress={() => this.props.editChannel(this.state)} title="Save Changes"
                        color="#841584" />
            <Button style={{fontSize:20, marginTop:50}} onPress={()=> {this.setModalVisible(!this.state.modalVisible,null); this.props.deleteChannel(this.state)}} title="Delete" color="red" />
          </View>
            <TouchableHighlight onPress={() => {
              this.setModalVisible(!this.state.modalVisible,null)
              }}>
              <Text style={{marginTop: 50, fontSize: 28}}>Close</Text>
            </TouchableHighlight>
         </View>
       </Modal>
        </ScrollView>
    );
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.channels !== nextProps.channels) {
    console.log(this.props.channels, nextProps.channels)
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(nextProps.channels)
      });
    }
  }

  renderSingleFeed(Channel) {
    return (
    <TouchableHighlight onPress={() => {
              this.setModalVisible(!this.state.modalVisible,Channel)
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
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF', 
  }
});

module.exports = connect(mapStateToProps,mapDispatchToProps)(ManageChannel);