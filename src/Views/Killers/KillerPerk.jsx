import React from 'react';
import './KillerPerk.scss';

const KillerPerk = ({ name, image }) => {
	return (
		<div className="killer-perk">
			<div>{name}</div>
			<img src={image} alt={name} />
		</div>
	);
};

export default KillerPerk;
