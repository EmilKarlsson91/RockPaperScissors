import { combineReducers } from 'redux';
import RPSReducers from './rps-reducers';
import ActiveRPSReducer from './active-rps-reducer';
import UrlReducers from './url-reducers';

const allReducers = combineReducers({
  rpsReducers: RPSReducers,
  activeRPSReducer: ActiveRPSReducer,
  urlReducers: UrlReducers,
});

export default allReducers;
