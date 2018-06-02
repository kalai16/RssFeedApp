import { FETCH_FEED, FETCH_SUCCEEDED, FETCH_FAILED } from '../actions/actionTypes';
//Saga effects
import { put, takeLatest } from 'redux-saga/effects';
import { Api } from './api';

function* fetchFeed() {
    try {
        const receivedFeed = yield Api.getFeedFromApi();   
        yield put({ type: FETCH_SUCCEEDED, receivedFeed: receivedFeed });     
    } catch (error) {        
        yield put({ type: FETCH_FAILED, error });
    }
}
export function* watchFetchFeed() {
    yield takeLatest(FETCH_FEED, fetchFeed);
}