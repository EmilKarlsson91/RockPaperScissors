import { combineReducers } from 'redux';
import RPSReducers from './rps-reducers';
import ActiveRPSReducer from './active-rps-reducer';
import ActiveBranchParams from './branch-params-reducer';
import UrlReducers from './url-reducers';
import RPSResult from './rps-result';
import LoggedIn from './logged-in-reducer';
import OpponentsData from './opponents-choice-reducers';
import StartedFromURL from './started-from-url-reducers';

const allReducers = combineReducers({
  rpsReducers: RPSReducers,
  rpsResult: RPSResult,
  activeRPSReducer: ActiveRPSReducer,
  activeBranchParams: ActiveBranchParams,
  urlReducers: UrlReducers,
  loggedIn: LoggedIn,
  opponentsData: OpponentsData,
  startedFromURL: StartedFromURL
});

export default allReducers;
