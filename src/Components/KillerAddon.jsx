import React from 'react';

const KillerAddon = ({ name, image }) => {
	return (
		<div>
			<div>{name }</div>
			<img src={image} alt={name}/>
		</div>
	);
}

export default KillerAddon;