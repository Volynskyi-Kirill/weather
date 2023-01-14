import { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { addCity } from '../Redux/actions';
import { ERROR_MESSAGE } from '../js/const';

function DisplayData(props) {
    const { cityList, setCityList, tab, reduxStore } = props;
    const [error, setError] = useState(false);

    const dispatch = useDispatch()
    const data = useSelector(state => state.dataNow.cityData)
    const cityName = data.cityName

    const favoriteCity = () => {
        const newCity = cityList.find((town) => town === cityName);
        if (newCity === undefined) {
            setCityList([...cityList, cityName]);
            dispatch(addCity(cityName))
        } else {
            setError(true);
        }
    };

    if (tab !== 'tab1') {
        return null;
    }

    return (
        <div className="tab-active" id="display-data">
            <div className="temperature-data">{data.temperature}°</div>
            <img src={data.icon} alt="" className="icon-data" />
            <div className="city-name-data">{data.cityName}</div>
            <button
                type="button"
                className="button-love"
                onClick={favoriteCity}
            >
                <img src="../../public/love.png" alt="" />
            </button>
            {error && (
                <div className="error">
                    <div className="city-repeat text-error">
                        {ERROR_MESSAGE.CITY_REPEAT}
                    </div>
                    <button
                        type="button"
                        className="button-close"
                        onClick={() => setError(false)}
                    >
                        +
                    </button>
                </div>
            )}
        </div>
    );
}

export { DisplayData };
