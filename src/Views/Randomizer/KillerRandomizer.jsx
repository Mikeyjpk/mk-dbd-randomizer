import React from 'react';
import { getRandomItem } from './RandomizerConstants';
import Killer from './Killer';
import KillerAddonRandomizer from './KillerAddonRandomizer';
import data from '../data.json';

const KillerRandomizer = () => {
	const { item: killer } = getRandomItem(data.killers);
	return (
		<div>
			<Killer name={killer.name} image={killer.image} />
			<KillerAddonRandomizer killer={killer} />
		</div>
	);
};

export default KillerRandomizer;
