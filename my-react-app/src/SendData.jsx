function SendData () {

	const data = {
		cityName: "Warsana",
		temp: "20",
	}

	const submit = () => {
		console.log("click")
		fetch('http://localhost:3001/api/update_json', {method: 'POST', body: JSON.stringify(data)})
	}

	return (
		<button onClick={submit}>
			click me!
		</button>
	)
}

export {SendData}