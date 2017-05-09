'use strict'

//const TAG_TYPES = ['Channel World','Channel Sports','Channel Health','Channel Art','Channel Technology & Science'];
import {ADD_CHANNEL, EDIT_CHANNEL, DELETE_CHANNEL,SHOW_CHANNELS } from '../Actions/ChannelActions';
let id = 0;
const initialState = {  
  channels: [
    {
      id: id++,
      channelName: 'Channel World',
      channelTag: 0,
      channelUrl: 'http://www.cbc.ca/cmlink/rss-world',
    },
    {
      id: id++,
      channelName: 'Channel Sports',
      channelTag: 1,
      channelUrl: 'http://www.cbc.ca/cmlink/rss-sports',
    },
    {
      id: id++,
      channelName: 'Channel Health',
      channelTag: 2,
      channelUrl: 'http://www.cbc.ca/cmlink/rss-health',
    },
    {
      id: id++,
      channelName: 'Channel Art',
      channelTag: 3,
      channelUrl: 'http://www.cbc.ca/cmlink/rss-arts',
    },
    {
      id: id++,
      channelName: 'Channel Technology & Science',
      channelTag: 4,
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
    let channel = state.channels.concat([]);
    let obj = {
        id:action.id,
        channelName: action.channelName, 
        channelTag: action.channelTag,
        channelUrl: action.channelUrl
      };
    channel.splice(action.id,1,obj);
    return {  
       channels: channel
    };
    case DELETE_CHANNEL:
    let channels = state.channels.concat([]);
    channels.splice(action.id,1);
    
    return {
    channels: channels
    };
    case SHOW_CHANNELS:
    return state;
    default:
    return state;
    }
}

module.exports = Channels;