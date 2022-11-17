import React from 'react';

const KillerPerk = ({ name, image }) => {
	return (
		<div>
			<div>{name}</div>
			<img src={image} />
		</div>
	);
}

export default KillerPerk