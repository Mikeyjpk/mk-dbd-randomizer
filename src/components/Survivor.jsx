import React from 'react';

const Survivor = ({ name, image }) => {
	return (
		<div>
			<div><b>Name: </b>{name}</div>
			<img src={image} />
		</div>
	);
}

export default Survivor;