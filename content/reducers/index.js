import { combineReducers } from 'redux';
import RPSReducers from './rps-reducers';
import ActiveRPSReducer from './active-rps-reducer';
import ActiveBranchParamsReducer from './branch-params-reducer';
import UrlReducers from './url-reducers';
import RPSResultReducer from './rps-result';
import LoggedInReducer from './logged-in-reducer';
import OpponentsDataReducer from './opponents-data-reducers';
import StartedFromURLReducer from './started-from-url-reducers';

const allReducers = combineReducers({
  rpsReducers: RPSReducers,
  rpsResultReducer: RPSResultReducer,
  activeRPSReducer: ActiveRPSReducer,
  activeBranchParamsReducer: ActiveBranchParamsReducer,
  urlReducers: UrlReducers,
  loggedInReducer: LoggedInReducer,
  opponentsDataReducer: OpponentsDataReducer,
  startedFromURLReducer: StartedFromURLReducer
});

export default allReducers;
