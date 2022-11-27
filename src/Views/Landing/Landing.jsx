import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.scss';

const Landing = () => {
	return (
		<div className="landing">
			<h1>DBD Randomizer</h1>
			<div>
				<Link to="/randomizer">Randomizer</Link>
			</div>
			<div>
				<Link to="/killers">Killers</Link>
			</div>
			<div>
				<Link to="/survivors">Survivors</Link>
			</div>
		</div>
	);
};

export default Landing;
