'use strict'


import {ADD_CHANNEL, EDIT_CHANNEL, DELETE_CHANNEL } from '../Actions/ChannelActions';
let id = 0;
const initialState = {  
  channels: []
}

/*
const Channel = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_CHANNEL':
      return {
        id: action.id,
        text: action.text,
        completed: false
      }
    default:
      return state
  }
}*/


function Channels(state= initialState ,action) {
    switch (action.type) {
    case ADD_CHANNEL:
    //console.log(state.channels);
    return {channels: state.channels.concat({id: id++, channelName: action.channelName, 
              channelTag: action.channelTag, channelUrl: action.channelUrl})};
    case EDIT_CHANNEL:
    return {  
       channels: state.channels.map(
           (channels, i) => i === 1 ? {...channels, text: action.payload}
                                   : channels
       )
    }
    case DELETE_CHANNEL:
    return {
    channels: [...state.channels.splice(0, action.payload), ...state.channels.splice(1)],
    }
    default:
    return state;
    }
}

module.exports = Channels;