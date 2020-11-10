import { combineReducers } from 'redux';

import QueryReducer from './queryReducer';

const rootReducer = combineReducers({
  query: QueryReducer,
});

export default rootReducer;
