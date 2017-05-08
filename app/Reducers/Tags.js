'use strict'

import {ADD_TAGS, SHOW_TAGS } from '../Actions/TagsActions';
let id = 0;
const initialState = {  
  tags: [
      {
          id: id++,
          tag: 'World',
        },
        {
            id: id++,
            tag: 'Sports',
        },
        {
            id: id++,
            tag: 'Health',
        },
        {
            id: id++,
            tag: 'Arts',
        },
        {
            id: id++,
            tag: 'Technology & Science',
        },

  ]
}

function Tags(state= initialState ,action) {
    switch (action.type) {
    case ADD_TAGS:
    return {tags: state.tags.concat({id: id++, tag: action.tag,})};
    case SHOW_TAGS:
    return state;
    default:
    return state;
    }
}

module.exports = Tags;