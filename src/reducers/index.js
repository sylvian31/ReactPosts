import { combineReducers } from 'redux';
import PostReducer from './reducer-posts'
import PostActiveReducer from './reducer-active-post'
import { reducer as FormReducer } from 'redux-form'

const rootReducer = combineReducers({
  posts: PostReducer,
  postActive : PostActiveReducer,
  form: FormReducer
});

export default rootReducer;
