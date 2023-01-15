import { ADD_CITY, DELETE_CITY, DATA_CITY } from './actions';
import { combineReducers } from 'redux';
import { DEFAULT } from '../js/const';

const cityListLS = JSON.parse(localStorage.getItem('cityList'));

const initialState = {
    cityList: cityListLS ?? [DEFAULT.CITY],
};

const dataState = {
    cityData: {},
};

// eslint-disable-next-line default-param-last
function cityLists(state = initialState, action) {
    switch (action.type) {
        case ADD_CITY:
            localStorage.setItem(
                'cityList',
                JSON.stringify([...state.cityList, action.cityName])
            );
            return {
                ...state,
                cityList: [...state.cityList, action.cityName],
            };

        case DELETE_CITY:
            localStorage.setItem(
                'cityList',
                JSON.stringify(
                    state.cityList.filter((town) => town !== action.cityName)
                )
            );
            return {
                ...state,
                cityList: state.cityList.filter(
                    (town) => town !== action.cityName
                ),
            };
        default:
            return state;
    }
}

// eslint-disable-next-line default-param-last
function dataNow(state = dataState, action) {
    switch (action.type) {
        case DATA_CITY:
            return {
                ...state,
                cityData: action.response,
            };
        default:
            return state;
    }
}

const weatherApp = combineReducers({
    cityLists,
    dataNow,
});

export { weatherApp };
