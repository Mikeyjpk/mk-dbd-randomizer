import React from 'react';

const Killer = ({ name, image }) => {
	return (
		<div>
			<div><b>Name: </b>{name}</div>
			<img src={image} />
		</div>
	);
}

export default Killer