import React from 'react';
import { getRandomItem } from './RandomizerConstants';
import data from '../../data.json';
import Survivor from '../Survivors/Survivor';

const SurvivorRandomizer = () => {
	const { item } = getRandomItem(data.survivors);
	return <Survivor name={item.name} image={item.image} />;
};

export default SurvivorRandomizer;
