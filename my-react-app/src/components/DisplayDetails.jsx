import { useSelector, useDispatch } from "react-redux";

function DisplayDetalis(props) {
    const { tab, reduxStore } = props;
    if (tab !== 'tab2') {
        return null;
    }
    // const datas = useSelector(state => state.dataNow.cityData)
    const data = reduxStore.dataNow.cityData;

    return (
        <div className="tab-active" id="display-details">
            <div className="city-name-details">{data.cityName}</div>
            <div className="data-list">
                <div className="temperature-details">
                    Temperature: {data.temperature}°
                </div>
                <div className="feels-like-details">
                    Feels like: {data.feelsLike}
                </div>
                <div className="weather-details">
                    Weather: {data.weatherStatus}
                </div>
                <div className="sunrise-details">Sunrise: {data.sunrise}</div>
                <div className="sunset-details">Sunset: {data.sunset}</div>
            </div>
        </div>
    );
}

export { DisplayDetalis };
