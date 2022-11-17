import React from 'react';

const SurvivorPerk = ({ name, image }) => {
	return (
		<div>
			<div>{name }</div>
			<img src={image} alt={name}/>
		</div>
	);
}

export default SurvivorPerk