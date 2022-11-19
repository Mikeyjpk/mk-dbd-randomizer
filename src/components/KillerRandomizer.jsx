import React from 'react';
import { getRandomItem } from './constants';
import Killer from './Killer';
import data from '../data.json';

const KillerRandomizer = () => {
	const { item } = getRandomItem(data.killers);
	return <Killer name={item.name} image={item.image} />
}

export default KillerRandomizer;
