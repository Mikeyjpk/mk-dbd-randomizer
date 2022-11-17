import React from 'react';

const SurvivorItem = ({ name, image }) => {
	return (
		<div>
			<div><b>Item: </b>{name}</div>
			<img src={image} />
		</div>
	);
}

export default SurvivorItem