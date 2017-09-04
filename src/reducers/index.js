import { combineReducers } from 'redux';
import SiteReducer from './reducer_site';
import PostsReducer from './reducer_posts';
import PagesReducer from './reducer_pages';

const rootReducer = combineReducers({
  settings: SiteReducer,
  posts: PostsReducer,
  pages: PagesReducer
});

export default rootReducer;
