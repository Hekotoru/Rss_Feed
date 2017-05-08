import { combineReducers } from 'redux'
import Channels from './Channels'
import Tags from './Tags'
import Feed from './Feed'

const RssFeed = combineReducers({
  Channels,
  Tags,
  Feed,
})

export default RssFeed