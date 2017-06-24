import { combineReducers } from 'redux';
import WeatherReducer from './WeatherReducer';

const rootReducer = combineReducers({
  state: (state) => state;
});


export default rootReducer;
