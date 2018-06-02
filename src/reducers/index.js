import { combineReducers } from 'redux';
import feedReducers from './feedReducers';

const allReducers = combineReducers({
    feedReducers,
    //you can add more reducers here, separated by , !
});
export default allReducers;