import React from 'react';

const SurvivorPerk = ({ name, image }) => {
	return (
		<div>
			<div>{name }</div>
			<img src={image} />
		</div>
	);
}

export default SurvivorPerk