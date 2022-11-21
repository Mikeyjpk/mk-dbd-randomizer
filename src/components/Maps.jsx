import React from 'react';

const Map = ({ name, image }) => {
	return (
		<div>
			<div>{name}</div>
			<img src={image} alt={name}/>
		</div>
	);
}

export default Map;