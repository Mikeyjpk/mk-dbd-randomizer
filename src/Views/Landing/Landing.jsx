import React from 'react';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
// import SampleImage from '../../Images/landingBackground/img1.png';  // this is the img import
import './Landing.scss';

const Landing = () => {
	return (
		<div className="landing">
			<Typography variant="h2">
				DBD Randomizer
			</Typography>
			<div>
				<a class="button" href="/randomizer">Survivor Randomizer</a>
			</div>
			<div>
				<a class="button" href="/killers">Killer Randomizer</a>
			</div>
			<div>
				<a class="button" href="/survivors">Custom Games</a>
			</div>
		</div>
	);
};

export default Landing;
