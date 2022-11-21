import React from 'react';

const ItemAddon = ({ name, image }) => {
	return (
		<div>
			<div>{name }</div>
			<img src={image} alt={name}/>
		</div>
	);
}

export default ItemAddon;