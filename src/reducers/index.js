import { combineReducers } from 'redux';
import PostsReduser from './reducer_posts';

const rootReducer = combineReducers({
  posts: PostsReduser
});

export default rootReducer;
