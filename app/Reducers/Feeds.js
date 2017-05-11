'use strict'

import {MAKE_REQUEST,FeedRequest, CLEAR_STATE } from '../Actions/FeedActions';
let id = 0;
const initialState = {  
  feeds: [
  ]
}

function Feeds(state= initialState ,action) {
    switch (action.type) {
    case MAKE_REQUEST:
    return {feeds: state.feeds.concat({id: id++, data: action.data})};
    case CLEAR_STATE:
    let data = [];
    return {feed: initialState.feeds}
    default:
    return state;
    }
}

module.exports = Feeds;