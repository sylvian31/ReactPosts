import { combineReducers } from 'redux';
import PostReducer from './reducer-posts'
import PostActiveReducer from './reducer-active-post'

const rootReducer = combineReducers({
  posts: PostReducer,
  postActive : PostActiveReducer

});

export default rootReducer;
