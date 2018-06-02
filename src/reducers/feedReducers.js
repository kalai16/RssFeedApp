import { FETCH_FEED, FETCH_SUCCEEDED, FETCH_FAILED } from '../actions/actionTypes';
// const feedReducers = (feed = [], action) => {
//     switch (action.type) {
//         case FETCH_SUCCEEDED:
//             return action.receivedFeed;
//         case FETCH_FAILED:
//             return [];
//         default:
//             return feed; //state does not change
//     }
// }

// export default feedReducers;

const initialState = {
    receivedFeed: [],
    isFetching: false,
    error: false
}
export default feedReducers = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_FEED:
            return {
                ...state,
                receivedFeed: [],
                isFetching: true
            }
        case FETCH_SUCCEEDED:
            return {
                ...state,
                receivedFeed: action.receivedFeed,
                isFetching: false
            }
        case FETCH_FAILED:
        return {
            ...state,
            isFetching: false,
            error: true
        }
        default:
            return state; //state does not change
    }
}