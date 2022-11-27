import React from 'react';
import { getRandomItem } from './constants';
import Maps from './Maps';
import data from '../data.json';

const MapRandomizer = () => {
	const { item } = getRandomItem(data.maps);
	return <Maps name={item.name} image={item.image} />
}

export default MapRandomizer