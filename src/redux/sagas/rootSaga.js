import { all } from 'redux-saga/effects';
import { weatherSaga } from './sagas';

export default function* rootSaga() {
    yield all([
        weatherSaga(),
    ])
}