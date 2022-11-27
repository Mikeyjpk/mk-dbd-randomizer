import React from 'react';
import { getRandomItem } from './RandomizerConstants';
import Survivor from './Survivor';
import data from '../data.json';

const SurvivorRandomizer = () => {
	const { item } = getRandomItem(data.survivors);
	return <Survivor name={item.name} image={item.image} />;
};

export default SurvivorRandomizer;
