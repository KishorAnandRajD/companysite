import { combineReducers } from 'redux';
import FoodsReducer from './foods_reducer';


const rootReducer = combineReducers({
  listFood:FoodsReducer,
});

export default rootReducer;
