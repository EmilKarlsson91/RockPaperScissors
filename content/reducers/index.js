import { combineReducers } from 'redux';
import RPSReducers from './rps-reducers';
import ActiveRPSReducer from './active-rps-reducer';
import UrlReducers from './url-reducers';
import LoggedIn from './logged-in-reducer';

const allReducers = combineReducers({
  rpsReducers: RPSReducers,
  activeRPSReducer: ActiveRPSReducer,
  urlReducers: UrlReducers,
  loggedIn: LoggedIn,
});

export default allReducers;
