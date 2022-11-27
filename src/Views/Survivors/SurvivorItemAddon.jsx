import React from 'react';
import './SurvivorItemAddon.scss';

const ItemAddon = ({ name, image }) => {
	return (
		<div className="survivor-item-addon">
			<div>{name}</div>
			<img src={image} alt={name} />
		</div>
	);
};

export default ItemAddon;
