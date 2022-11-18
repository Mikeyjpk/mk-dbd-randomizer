import React from 'react';
import { getRandomItem } from './constants';
import SurvivorItem from './SurvivorItem';
import data from '../data.json';

const SurvivorItemRandomizer = () => {
	const { item } = getRandomItem(data.survivorItems);
	return (
		<div className="survivor">
			<SurvivorItem name={item.name} image={item.image} />
		</div>
	)
}
export default SurvivorItemRandomizer