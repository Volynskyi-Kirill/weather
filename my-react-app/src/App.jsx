import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import { Wrapper } from './components/Wrapper';
import { SearchBox } from './components/SearchBox';
import { DisplayData } from './components/DisplayData';
import { DisplayDetails } from './components/DisplayDetails';
import { DisplayForecast } from './components/DisplayForecast';
import { CityList } from './components/CityList';
import { Tabs } from './components/Tabs';
import { ShowResponse } from './components/ShowResponse';
import { DEFAULT } from './js/const';
import { dataCity } from './Redux/actions';

function App() {
    const [tab, setTab] = useState('tab1');
    const [dataForecast, setDataForecast] = useState([]);

    const dispatch = useDispatch();
    const reduxStore = useSelector((state) => state);

    const dispatchDataCity = (dataWeather) => dispatch(dataCity(dataWeather));

    useEffect(() => {
        try {
            const lastCity = JSON.parse(localStorage.getItem('lastCity'));
            if (lastCity) {
                ShowResponse(lastCity, null, setDataForecast, dispatchDataCity);
            } else {
                ShowResponse(
                    DEFAULT.CITY,
                    null,
                    setDataForecast,
                    dispatchDataCity
                );
            }
        } catch (error) {
            alert(error);
        }
    }, []);

    return (
        <Wrapper>
            <SearchBox
                setDataForecast={setDataForecast}
                dispatchDataCity={dispatchDataCity}
            />
            <div className="content">
                <DisplayData tab={tab} />
                <DisplayDetails tab={tab} reduxStore={reduxStore} />
                <DisplayForecast tab={tab} dataForecast={dataForecast} />
                <CityList
                    setDataForecast={setDataForecast}
                    dispatchDataCity={dispatchDataCity}
                />
            </div>
            <Tabs setTab={setTab} />
        </Wrapper>
    );
}

export default App;
