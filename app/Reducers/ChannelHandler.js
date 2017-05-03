import {ADD_CHANNEL, EDIT_CHANNEL, DELETE_CHANNEL } from '../Actions/ChannelActions';

const initialState = {  
  channels: []
}

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
}


function Channels(state=[],action) {
    switch (action.type) {
    case ADD_CHANNEL:
    return state.map(t =>
        Channel(t, action)
      )
    case EDIT_CHANNEL:
    return { 
       ...state, 
       channels: state.channels.map(
           (channels, i) => i === 1 ? {...channels, text: action.payload}
                                   : channels
       )
    }
    case DELETE_CHANNEL:
    return {...state,
    channels: [...state.Channels.splice(0, action.payload), ...state.Channels.splice(1)],
    }
    default:
    return state;
    }
}