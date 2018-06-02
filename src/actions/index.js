import { FETCH_FEED, FETCH_SUCCEEDED, FETCH_FAILED } from './actionTypes';

export const fetchFeedAction = () => {
    return {
        type: FETCH_FEED,
    }
}

//Action sent by Redux-saga
export const fetchSuccessAction = (receivedFeed) => {
    return {
        type: FETCH_SUCCEEDED,
        receivedFeed
    }
}

export const fetchFailedAction = (error) => {
    return {
        type: FETCH_FAILED,
        error
    }
}
