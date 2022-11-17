import React, { useState } from 'react';
import './weather.css';
import axios from 'axios';

const Weather = () => {
	const [data, setData] = useState({});
	const [location, setLocation] = useState('');
	const apiUrl =
		'https://api.openweathermap.org/data/2.5/weather?q=lagos&units=imperial&appid=fd13aecf47aacf819b0214781879676c';

	const searchLocation = (e) => {
		if (e.key === 'Enter') {
			axios.get(apiUrl).then((resp) => {
				setData(resp.data);
				console.log(resp.data);
			});
			setLocation('');
		}
	};
	return (
		<>
			<main className='weather__app'>
				<div className='weather__input'>
					<input
						type='text'
						placeholder='Enter City'
						value={location}
						onChange={(e) => setLocation(e.target.value)}
						onKeyPress={searchLocation}
					/>
				</div>
				<section className='container'>
					<div className='container__top'>
						<p className='location'>{data.name}</p>
						<div>
							{data.main ? (
								<h2 className='weather__temp'>{data.main.temp.toFixed()}°F</h2>
							) : null}
						</div>
						<div>
							{data.weather ? <p className='desc'>{data.weather[0].main}</p> : null}
						</div>
					</div>

					{data.name !== undefined && (
						<div className='weather__info'>
							<div>
								{data.main ? (
									<p className='weather__emp'>{data.main.humidity}%</p>
								) : null}
								<p>Humidity</p>
							</div>
							<div>
								<p className='weather__emp'>{data.visibility.toFixed()}km</p>
								<p>Visibility</p>
							</div>
							<div>
								{data.wind ? (
									<p className='weather__emp'>{data.wind.speed.toFixed()}MPH</p>
								) : null}
								<p>Wind(Speed)</p>
							</div>
						</div>
					)}
				</section>
			</main>
		</>
	);
};

export default Weather;
