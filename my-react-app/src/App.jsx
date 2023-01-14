import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import { DataWeatherContext } from './context/DataWeatherContext';
import { Wrapper } from './components/Wrapper';
import { SearchBox } from './components/SearchBox';
import { DisplayData } from './components/DisplayData';
import { DisplayDetalis } from './components/DisplayDetails';
import { DisplayForecast } from './components/DisplayForecast';
import { CityList } from './components/CityList';
import { Tabs } from './components/Tabs';
import { ShowResponse } from './components/ShowResponse';
import { DEFAULT } from './js/const';
import { dataCity } from './Redux/actions';

function App() {
    const [tab, setTab] = useState('tab1');
    const [dataWeather, setDataWeather] = useState();
    const [dataForecast, setDataForecast] = useState([]);
    const [cityList, setCityList] = useState([]);

    const dispatch = useDispatch();
    const reduxStore = useSelector((state) => state);

    const cityName = reduxStore.dataNow.cityData.cityName;

    useEffect(() => {
        if (dataWeather) {
            dispatch(dataCity(dataWeather));
        }
    }, [dataWeather]);

    useEffect(() => {
        if (cityList.length !== 0) {
            try {
                localStorage.setItem('cityList', JSON.stringify(cityList));
            } catch (error) {
                alert(error);
            }
        }
    }, [cityList]);

    useEffect(() => {
        try {
            const cities = JSON.parse(localStorage.getItem('cityList'));
            if (cities) {
                setCityList(cities);
            }
            const lastCity = JSON.parse(localStorage.getItem('lastCity'));
            if (lastCity) {
                ShowResponse(lastCity, null, setDataForecast, setDataWeather);
            } else {
                ShowResponse(
                    DEFAULT.CITY,
                    null,
                    setDataForecast,
                    setDataWeather
                );
            }
        } catch (error) {
            alert(error);
        }
    }, []);
    return (
        <DataWeatherContext.Provider value={setDataWeather}>
            <Wrapper>
                <SearchBox
                    setDataForecast={setDataForecast}
                    setDataWeather={setDataWeather}
                />
                <div className="content">
                    <DisplayData
                        cityList={cityList}
                        setCityList={setCityList}
                        tab={tab}
                        reduxStore={reduxStore}
                    />
                    <DisplayDetalis tab={tab} reduxStore={reduxStore} />
                    <DisplayForecast
                        cityName={cityName}
                        tab={tab}
                        dataForecast={dataForecast}
                    />
                    <CityList
                        cityList={cityList}
                        setCityList={setCityList}
                        setDataForecast={setDataForecast}
                        setDataWeather={setDataWeather}
                    />
                </div>
                <Tabs setTab={setTab} />
            </Wrapper>
        </DataWeatherContext.Provider>
    );
}

export default App;
