import { combineReducers } from 'redux';
import counter from './counter';
import header from './header';
import log from './log';

export default combineReducers({
  counter,
  header,
  log
});
