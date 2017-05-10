'use strict'

import {MAKE_REQUEST,FeedRequest } from '../Actions/FeedActions';
let id = 0;
const initialState = {  
  feeds: [
  ]
}

function Feeds(state= initialState ,action) {
    switch (action.type) {
    case MAKE_REQUEST:
    console.log(action);
    return {feeds: state.feeds.concat({id: id++, data: action.data})};
    default:
    return state;
    }
}

module.exports = Feeds;