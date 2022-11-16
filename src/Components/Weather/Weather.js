import React from 'react';
import './weather.css';

const Weather = () => {
	return (
		<>
			<main>
				<section>
					<div>
						<h1>LAGOS</h1>
						<p>19</p>
						<p>clear skies</p>
					</div>
				</section>
				<section>
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
				</section>
			</main>
		</>
	);
};

export default Weather;
