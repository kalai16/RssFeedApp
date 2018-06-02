// import { compose, createStore, applyMiddleware } from 'redux';
// import createSagaMiddleware from 'redux-saga';
// //import logger from 'redux-logger'; //eslint-disable-line

// // import { offline } from '@redux-offline/redux-offline';
// // import offlineConfig from '@redux-offline/redux-offline/lib/defaults';
// import reducer from '../reducers';
// import mySaga from '../sagas'

// // create the saga middleware
// const sagaMiddleware = createSagaMiddleware();
// // mount it on the Store
// export default createStore(reducer, applyMiddleware(sagaMiddleware));

// // then run the saga
// sagaMiddleware.run(mySaga);


import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootSaga from '../sagas/rootSaga';
import allReducers from '../reducers';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
// mount it on the Store
export default createStore(allReducers, applyMiddleware(sagaMiddleware));

// then run the saga
sagaMiddleware.run(rootSaga);