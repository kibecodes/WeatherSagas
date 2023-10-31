
import { put, takeEvery, call } from 'redux-saga/effects';
import { 
    FETCH_WEATHER_REQUEST,
    fetchWeatherSuccess,
    fetchWeatherFailure,
} from '../actions/actions';

function* fetchWeatherData(action) {
    try {
        const response = yield call(fetch, `http://api.weatherapi.com/v1/forecast.json?key=8d2f97e789064394953175937231306&q=${action.payload}`)
        if(!response.ok) {
            throw new Error("Request failed");
        }
        const data = yield response.json();
        const { current, location } = data;
        const { name, country } = location;
        const { temp_c, humidity, condition } = current;
        const { text, icon } = condition;

        const transformedData = {
            name,
            country,
            temp_c,
            humidity,
            text,
            icon,
        };

        yield put(fetchWeatherSuccess(transformedData));
        console.log(transformedData);
    } catch (error) {
        yield put(fetchWeatherFailure(error.message));
    }
}

export function* weatherSaga() {
    yield takeEvery(FETCH_WEATHER_REQUEST, fetchWeatherData);
}
