import React from 'react';
import { getRandomItem } from './constants';
import SurvivorItem from './SurvivorItem';
import ItemAddonRandomizer from './ItemAddonRandomizer';
import data from '../data.json';

const SurvivorItemRandomizer = () => {
	const { item } = getRandomItem(data.survivorItems);
	return (
		<div className="survivor">
			<SurvivorItem name={item.name} image={item.image} />
			<ItemAddonRandomizer item={item} />
		</div>
	)
}
export default SurvivorItemRandomizer