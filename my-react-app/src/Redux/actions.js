const ADD_CITY = "ADD_CITY"
const DELETE_CITY = "DELETE_CITY"
const DATA_CITY = "DATA_CITY"

function addCity (cityName) {
	return {
		type: ADD_CITY,
		cityName
	}
}

function deleteCity(cityName) {
	return {
		type: DELETE_CITY,
		cityName
	}
}

function dataCity(response) {
	return {
		type: DATA_CITY,
		response
	}
}

export {addCity, deleteCity, dataCity, ADD_CITY, DELETE_CITY, DATA_CITY}