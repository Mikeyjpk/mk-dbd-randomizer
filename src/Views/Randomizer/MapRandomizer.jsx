import React from 'react';
import { getRandomItem } from './RandomizerConstants';
import data from '../../data.json';
import Map from '../Maps/Map';

const MapRandomizer = () => {
	const { item } = getRandomItem(data.maps);
	return <Map name={item.name} image={item.image} />;
};

export default MapRandomizer;
