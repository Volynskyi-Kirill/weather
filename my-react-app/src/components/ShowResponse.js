import { useSelector, useDispatch } from 'react-redux';
import { useContext } from 'react';
import { RESPONSE, DEFAULT } from '../js/const';
import { getData } from '../js/response';
import { formatDate } from '../js/formatDate';
import { dataCity } from '../Redux/actions';
import { DataWeatherContext } from '../context/DataWeatherContext';

const linkImg = (icon) => `//openweathermap.org/img/wn/${icon}@2x.png`;

async function ShowResponse(
    cityName,
    setValueInput,
    setDataForecast,
    setDataWeather,
) {
    // const setDataWeather = useContext(DataWeatherContext)
    const url = `${RESPONSE.serverUrl}?q=${cityName}&appid=${RESPONSE.apiKey}&units=metric`;
    const urlForecast = `${RESPONSE.serverUrlForecast}?q=${cityName}&appid=${RESPONSE.apiKey}&units=metric`;
    const response = await getData(url);
    if (response.cod !== '404') {
        const responseForecast = await getData(urlForecast);
        setDataForecast(responseForecast.list);
    }
    
    const dataResponse = {
        temperature: Math.round(response.main.temp),
        icon: linkImg(response.weather[0].icon),
        cityName: response.name,
        feelsLike: Math.round(response.main.feels_like),
        weatherStatus: response.weather[0].main,
        sunrise: formatDate(response.sys.sunrise),
        sunset: formatDate(response.sys.sunset),
    }

    setDataWeather(dataResponse);

    if (setValueInput !== null) {
        setValueInput(DEFAULT.VALUE);
    }
}

export { ShowResponse };
