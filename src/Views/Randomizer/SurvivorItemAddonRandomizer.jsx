import React from 'react';
import { getRandomSet, survivorItemType } from './RandomizerConstants';
import SurvivorItemAddon from '../Survivors/SurvivorItemAddon';
import data from '../../data.json';

const SurvivorItemAddonRandomizer = ({ item }) => {
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
				<SurvivorItemAddon
					key={itemAddon.name}
					name={itemAddon.name}
					image={itemAddon.image}
				/>
			))}
		</div>
	);
};

export default SurvivorItemAddonRandomizer;
