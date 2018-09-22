import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import PostsReduser from './reducer_posts';

const rootReducer = combineReducers({
  posts: PostsReduser,
  form: formReducer
});

export default rootReducer;
