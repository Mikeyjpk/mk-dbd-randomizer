import React from 'react';
import './SurvivorPerk.scss';

const SurvivorPerk = ({ name, image }) => {
	return (
		<div className="survivor-perk">
			<div>{name}</div>
			<img src={image} alt={name} />
		</div>
	);
};

export default SurvivorPerk;
