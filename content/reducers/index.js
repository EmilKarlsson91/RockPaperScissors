import { combineReducers } from 'redux';
import RPSReducers from './rps-reducers';
import ActiveRPSReducer from './active-rps-reducer';
import UrlReducers from './url-reducers';
import LoggedIn from './logged-in-reducer';
import OpponentsChoice from './opponents-choice-reducers';
import StartedFromURL from './started-from-url-reducers';

const allReducers = combineReducers({
  rpsReducers: RPSReducers,
  activeRPSReducer: ActiveRPSReducer,
  urlReducers: UrlReducers,
  loggedIn: LoggedIn,
  opponentsChoice: OpponentsChoice,
  startedFromURL: StartedFromURL
});

export default allReducers;
