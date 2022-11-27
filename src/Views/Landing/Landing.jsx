import React from 'react';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
// import SampleImage from '../../Images/landingBackground/img1.png';  // this is the img import
import ImageRandomizer from '../Randomizer/ImageRandomizer'
import './Landing.scss';


const Landing = () => {
	return (
		<div className="landing">
			<h2 class="heading">
				DBD Randomizer
			</h2>
			<div>
				<a class="survivorButton" href="/randomizer">Survivor Randomizer</a>
			</div>
			<div>
				<a class="killerButton" href="/killers">Killer Randomizer</a>
			</div>
			<div>
				<a class="customButton" href="/survivors">Custom Games</a>
			</div>
		</div>
	);
};

export default Landing;
