import { useState } from 'react';
import { DEFAULT } from '../js/const';
import { ShowResponse } from './ShowResponse';

function SearchBox(props) {
    const { setDataForecast, dispatchDataCity } = props;
    const [valueInput, setValueInput] = useState(DEFAULT.VALUE);

    const addTown = (event) => {
        event.preventDefault();
        if (valueInput === DEFAULT.VALUE) {
            alert('Пустая строка, введите город!');
            return null;
        }
        ShowResponse(
            valueInput.trim(),
            setValueInput,
            setDataForecast,
            dispatchDataCity
        );
    };

    const changeInput = (event) => {
        if (event.target.value.search(/\d/) !== -1) {
            alert('Вводите только буквы!');
        } else {
            setValueInput(event.target.value);
        }
    };

    return (
        <form action="" className="search-box" onSubmit={addTown}>
            <input
                className="input-town"
                type="text"
                placeholder="Actobe"
                value={valueInput}
                onChange={changeInput}
            />
            <button className="button-search" type="submit">
                <img
                    className="lupa-search"
                    src="../../public/lupa.png"
                    alt=""
                />
            </button>
        </form>
    );
}

export { SearchBox };
