import React from 'react';
import './weather.css';

const Weather = () => {
	return (
		<>
			<main>
				<div className='weather__input'>
					<input type='text' placeholder='Enter City' />
				</div>
				<section className='container'>
					<div className='container__top'>
						<p>LAGOS</p>
						<h2 className='weather__temp'>19</h2>
						<p className='desc'>clear skies</p>
					</div>
					<div className='weather__info'>
						<div>
							<p>30</p>
							<p>Humidity</p>
						</div>
						<div>
							<p>30</p>
							<p>Visibility</p>
						</div>
						<div>
							<p>30</p>
							<p>Wind</p>
						</div>
					</div>
				</section>
			</main>
		</>
	);
};

export default Weather;
