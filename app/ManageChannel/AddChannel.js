import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  ListView,
  View,
  TextInput,
  Button
} from 'react-native';

import { connect } from 'react-redux';
import { ADD_CHANNEL } from '../Actions/ChannelActions';
import { Actions } from 'react-native-router-flux';

function mapStateToProps(state) {
  return { channels: state.Channels.channels};
}

function mapDispatchToProps(dispatch) {
  return { 
      AddChannel: (item) => {
        dispatch({type: ADD_CHANNEL, channelName: item.channelName, channelTag: item.channelTag, channelUrl : item.channelUrl});
        alert('Channel created');
        Actions.Home({type:'reset'});
        //console.log(this.props.channels);
     }
  }
}

class AddChannel extends Component {
      constructor(props) {
          super(props);
          this.state = { channelName: '', channelTag: '', channelUrl: '' };
        }
        render() {
            return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Channel name</Text>
                <TextInput
                           onChangeText={(text) => this.setState({channelName:text})}
                           value={this.state.channelName}/>
                <Text style={styles.welcome}>Tags</Text>
                <TextInput 
                           onChangeText={(text) => this.setState({channelTag:text})}
                           value={this.state.channelTag}/>
                <Text  style={styles.welcome}>Url</Text>
                <TextInput 
                           onChangeText={(text) => this.setState({channelUrl:text})}
                           value={this.state.channelUrl}/>
                <Button onPress={() => this.props.AddChannel(this.state)} title="Save Channel"
                        color="#841584" />
            </View>
            );
        }
    }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:50,
  },
  welcome: {
    fontSize: 20,
  },
});

module.exports = connect(mapStateToProps,mapDispatchToProps)(AddChannel);