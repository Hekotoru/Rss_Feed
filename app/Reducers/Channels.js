'use strict'

//const TAG_TYPES = ['Channel World','Channel Sports','Channel Health','Channel Art','Channel Technology & Science'];
import {ADD_CHANNEL, EDIT_CHANNEL, DELETE_CHANNEL,SHOW_CHANNELS } from '../Actions/ChannelActions';
let id = 0;
const initialState = {  
  channels: [
    {
      id: id++,
      channelName: 'Channel World',
      channelTag: 'World',
      channelUrl: 'http://www.cbc.ca/cmlink/rss-world',
    },
    {
      id: id++,
      channelName: 'Channel Sports',
      channelTag: 'Sports',
      channelUrl: 'http://www.cbc.ca/cmlink/rss-sports',
    },
    {
      id: id++,
      channelName: 'Channel Health',
      channelTag: 'Health',
      channelUrl: 'http://www.cbc.ca/cmlink/rss-health',
    },
    {
      id: id++,
      channelName: 'Channel Art',
      channelTag: 'Arts',
      channelUrl: 'http://www.cbc.ca/cmlink/rss-arts',
    },
    {
      id: id++,
      channelName: 'Channel Technology & Science',
      channelTag: 'Technology',
      channelUrl: 'http://www.cbc.ca/cmlink/rss-technology',
    },
  ]
}

function Channels(state= initialState ,action) {
    switch (action.type) {
    case ADD_CHANNEL:
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
    case SHOW_CHANNELS:
    return state;
    default:
    return state;
    }
}

module.exports = Channels;