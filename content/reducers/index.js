import { combineReducers } from 'redux';
import RPSReducers from './rps-reducers';
import ActiveRPSReducer from './active-rps-reducer';

const allReducers = combineReducers({
  rpsReducers: RPSReducers,
  activeRPSReducer: ActiveRPSReducer
});

export default allReducers;
