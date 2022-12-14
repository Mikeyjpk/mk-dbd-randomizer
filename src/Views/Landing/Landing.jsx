import React from 'react';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import ImageRandomizer from '../Randomizer/ImageRandomizer'
import './Landing.scss';


const Landing = () => {
	return (
		<div className="landing">
		<ImageRandomizer />
			
			<h2 className="heading">
				DBD Randomizer
			</h2>
			<div>
				<Link className="survivorButton" to="/randomizer">Survivor Randomizer</Link>
			</div>
			<div>
				<Link className="killerButton" to="/killers">Killer Randomizer</Link>
			</div>
			<div>
				<Link className="customButton" to="/survivors">Custom Games</Link>
			</div>
		</div>
	);
};

export default Landing;