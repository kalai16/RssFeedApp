import { call, all } from 'redux-saga/effects';
import { watchFetchFeed } from './feedSaga';

export default function* rootSaga() {
    yield call(watchFetchFeed);              
}