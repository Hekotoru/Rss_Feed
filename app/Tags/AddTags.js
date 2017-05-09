import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  ListView,
  View,
  TextInput,
  Button,
  Picker,
} from 'react-native';

import { connect } from 'react-redux';
import { ADD_TAGS } from '../Actions/TagsActions';
import { Actions } from 'react-native-router-flux';

function mapStateToProps(state) {
  return { 
    tags: state.Tags.tags,
  };
}

function mapDispatchToProps(dispatch) {
  return { 
      AddTags: (item) => {
        dispatch({type: ADD_TAGS, tag: item.tagName,});
        alert('Tag created');
        Actions.Home({type:'reset'});
        //console.log(this.props.channels);
     }
  }
}

class AddTags extends Component {
      constructor(props) {
          super(props);
          this.state = { tagName: '',};
        }
        render() {
            return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Tag name</Text>
                <TextInput
                           onChangeText={(text) => this.setState({tagName:text})}
                           value={this.state.channelName}/>
                <Button onPress={() => this.props.AddTags(this.state)} title="Save Tag"
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

module.exports = connect(mapStateToProps,mapDispatchToProps)(AddTags);