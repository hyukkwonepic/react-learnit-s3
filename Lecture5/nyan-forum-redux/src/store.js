import {
  createStore,
  combineReducers,
  compose,
  applyMiddleware,
} from 'redux';

import thunk from 'redux-thunk';

import postListReducer from './views/PostList/reducer';
import postDetailReducer from './views/PostDetail/reducer';

const middlewares = [
  thunk
];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers({
  postList: postListReducer,
  postDetail: postDetailReducer,
});

const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(...middlewares)
  )
);

export default store;