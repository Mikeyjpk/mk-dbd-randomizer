import React from 'react';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import ImageRandomizer from '../Randomizer/ImageRandomizer'
import './Landing.scss';


const Landing = () => {
	return (
		<div className="landing">
			<div className="landing__background">
				<ImageRandomizer />
			</div>
			<div className="landing__content">
				<h2 className="landing__content__heading">
					DBD Randomizer
				</h2>
				<div className="landing__content__button">
					<Link className="landing__content__button__link" to="/randomizer">Randomizer</Link>
				</div>
				<div className="landing__content__button">
					<Link className="landing__content__button__link" to="/killers">Killers</Link>
				</div>
				<div className="landing__content__button">
					<Link className="landing__content__button__link" to="/survivors">Survivors</Link>
				</div>
				<div className="landing__content__button">
					<Link className="landing__content__button__link" to="/randomizer/killers">Killer Randomizer</Link>
				</div>
			</div>
			
		</div>
	);
};

export default Landing;