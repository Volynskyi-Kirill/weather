function SendData (props) {

	const {dataForecast, cityList} = props

	const data = {
		cityName: "Warsana",
		temp: "2",
	}

	const submit = () => {
		console.log("click")
		fetch('http://localhost:3001/api/update_json', {method: 'POST', body: JSON.stringify(cityList)})
	}

	return (
		<button onClick={submit}>
			click me!
		</button>
	)
}

export {SendData}