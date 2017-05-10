import { combineReducers} from 'redux'
import Channels from './Channels'
import Tags from './Tags'
import Feeds from './Feeds'
const RssFeed = combineReducers({
  Channels,
  Tags,
  Feeds,
})

export default RssFeed