import React from 'react';
import './Map.scss';

const Map = ({ name, image }) => {
	return (
		<div className="map">
			<div>{name}</div>
			<img src={image} alt={name} />
		</div>
	);
};

export default Map;
