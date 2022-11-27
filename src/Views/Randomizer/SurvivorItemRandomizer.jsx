import React from 'react';
import { getRandomItem } from './RandomizerConstants';
import SurvivorItemAddonRandomizer from './SurvivorItemAddonRandomizer';
import SurvivorItem from '../Survivors/SurvivorItem';
import data from '../../data.json';

const SurvivorItemRandomizer = () => {
	const { item } = getRandomItem(data.survivorItems);
	return (
		<div className="survivor">
			<SurvivorItem name={item.name} image={item.image} />
			<SurvivorItemAddonRandomizer item={item} />
		</div>
	);
};
export default SurvivorItemRandomizer;
