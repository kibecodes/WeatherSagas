import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import weatherReducer from './reducers/reducer'; 
import rootSaga from './sagas/rootSaga';


const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    weatherReducer,
    applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(rootSaga);

export default store;