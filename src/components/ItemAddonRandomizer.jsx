import React from 'react';
import { getRandomSet } from './constants';
import ItemAddon from './ItemAddon';
import data from '../data.json';

const ItemAddonRandomizer = () => {
	const ItemAddons = getRandomSet(data.survivorItemAddons, 2);

	return (
		<div className="Addons">
			{ItemAddons.map(itemAddon => 
				<ItemAddon key={itemAddon.name} name={itemAddon.name} image={itemAddon.image} />
			)}
		</div>
	)
}

export default ItemAddonRandomizer;