import React from 'react';
import { getRandomSet, survivorItemType } from './RandomizerConstants';
import ItemAddon from './ItemAddon';
import data from '../data.json';

let ItemAddonRandomizer = ({ item }) => {
	let possibleAddons = [];

	switch (item.itemType) {
		case survivorItemType.toolbox:
			possibleAddons = data.toolBoxAddOns;
			break;
		case survivorItemType.flashlight:
			possibleAddons = data.flashlightAddOns;
			break;
		case survivorItemType.key:
			possibleAddons = data.keyAddOns;
			break;
		case survivorItemType.medkit:
			possibleAddons = data.medkit;
			break;
		case survivorItemType.map:
			possibleAddons = data.mapAddOns;
			break;
		default:
			return <div>unknown survivor item type {item.itemType}</div>;
	}

	const selectedAddons = getRandomSet(possibleAddons, 2);

	return (
		<div className="Addons">
			{selectedAddons.map((itemAddon) => (
				<ItemAddon
					key={itemAddon.name}
					name={itemAddon.name}
					image={itemAddon.image}
				/>
			))}
		</div>
	);
};

export default ItemAddonRandomizer;
