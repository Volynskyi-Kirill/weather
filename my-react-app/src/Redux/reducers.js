import { ADD_CITY, DELETE_CITY, DATA_CITY } from './actions';
import { combineReducers } from 'redux';

// const cityListLS = JSON.parse(localStorage.getItem('cityList'))

const initialState = {
    cityList: [],
};

const dataState = {
    cityData: {},
}



// eslint-disable-next-line default-param-last
function cityLists(state = initialState, action) {
    switch (action.type) {
        case ADD_CITY:
            return {
                ...state,
                cityList: [
                    ...state.cityList,
                    {
                        cityName: action.cityName,
                    },
                ],
            };
        case DELETE_CITY:
            return {
                ...state,
                cityList: state.cityList.filter(
                    (town) => town.cityName !== action.cityName
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
