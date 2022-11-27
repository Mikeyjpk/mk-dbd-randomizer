import React from 'react';
import './KillerAddon.scss';

const KillerAddon = ({ name, image }) => {
	return (
		<div className="killer-addon">
			<div>{name}</div>
			<img src={image} alt={name} />
		</div>
	);
};

export default KillerAddon;
