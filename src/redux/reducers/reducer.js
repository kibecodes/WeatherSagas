
import { 
    FETCH_WEATHER_REQUEST,
    FETCH_WEATHER_SUCCESS,
    FETCH_WEATHER_FAILURE,
} from "../actions/actions";

const initialState = {
    isLoading: false,
    weather: null,
    error: null,
};

const weatherReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_WEATHER_REQUEST:
            return {...state, isLoading: true, error: null };
        case FETCH_WEATHER_SUCCESS:
            return {...state, isLoading: false, weather: action.payload, error: null };
        case FETCH_WEATHER_FAILURE:
            return {...state, isLoading: false, weather: null, error: action.payload };
        default:
            return state;
    }
};

export default weatherReducer;