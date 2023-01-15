import { useSelector, useDispatch } from 'react-redux';
import { deleteCity } from '../Redux/actions';
import { CityWrap } from './CityWrap';
import { ShowResponse } from './ShowResponse';

function CityList(props) {
    const { setDataForecast, dispatchDataCity } = props;

    const dispatch = useDispatch();
    const result = useSelector((state) => state.cityLists.cityList);

    const deleteFavoriteCity = (cityName) => {
        dispatch(deleteCity(cityName));
    };

    const showCity = (city) => {
        ShowResponse(city, null, setDataForecast, dispatchDataCity);
    };

    const lastSelectedCity = (city) => {
        localStorage.setItem('lastCity', JSON.stringify(city));
    };
    const allCityList = result.map((town) => (
        <CityWrap
            key={town}
            town={town}
            deleteFavoriteCity={deleteFavoriteCity}
            showCity={showCity}
            lastSelectedCity={lastSelectedCity}
        />
    ));

    return (
        <div className="container-city-list">
            <div className="header-city-list">Added Locations:</div>
            <div className="city-list">{allCityList}</div>
        </div>
    );
}

export { CityList };
