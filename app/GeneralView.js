import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button
} from 'react-native';

import FeedListing from './Feed/FeedListing';
import TagsListing from './Tags/TagListing';
import ManageChannel from './ManageChannel/ManageChannel';


class GeneralView extends Component {
    state = {
        isOpen: false,
        selectedItem: null,
        menuSelected:  this.props.menuSelected,
    };
    onTagFilter = (item) => {
        this.setState({
            selectedItem: item,
        })
        console.log(this.state.selectedItem);
    }
    render() {
        switch(this.props.menuSelected)
        {
            case 'Tags':
            if(this.state.selectedItem != null) {
            return (<FeedListing filter={this.state.selectedItem}/>);
            }
            return (<TagsListing  onTagClick={this.onTagFilter}/>);
            break;

            case 'Manage channels':
            return (<ManageChannel />);
            break;

            default:
            return (<FeedListing />);
            break;
        }
    }
}

module.exports = GeneralView;