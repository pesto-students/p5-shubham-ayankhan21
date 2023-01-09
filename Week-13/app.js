const express = require('express');
const https = require('https');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended:true}));


app.post("/city", (req, res) => {
	let list = [];
	let main = [];
	const city = req.body.city;
	const zipcode = req.body.zipcode;
	const count = req.body.count;
    const API_KEY = '429bc2066143d059bd734e7dece07fcd';

	const url = ` https://api.openweathermap.org/data/2.5/forecast?q=${
		zipcode ? zipcode : city
	}&appid=${API_KEY}&units=metric&count=${count}`;

	https.get(url, (response) => {
		response.on("data", (data) => {
			const weather = JSON.parse(data);
			list = weather.list;
			list.forEach((e) => {
				let [date, time] = e.dt_txt.split(" ");
				// main.push([e.main, e.weather[0].description, date]);
				main.push({
					"temperature details": e.main,
					"temperature description": e.weather[0].description,
					date: date,
					time: time,
				});
			});
			const page = req.query.page;
			const limit = req.query.limit;

			const startIndex = (page - 1) * limit;
			const endIndex = page * limit;
			const result = main.slice(startIndex, endIndex);
            // console.log(result)npm 
			res.json(result);
		});
	});
});




app.listen(3000,()=>{
    console.log("server running on port 3000")
})