// altered data file. this is is currently broken. 

import React from 'react';
import { getRandomSet } from './constants';
import KillerAddon from './KillerAddon';
import data from '../data.json';

const KillerAddonRandomizer = ({ killer }) => {
	const addons = getRandomSet(killer.addOns, 2);

	return (
		<div className="killer-addons">
			{addons.map(addon => 
				<KillerAddon key={addon.name} name={addon.name} image={addon.image} />
			)}
		</div>
	)
}

export default KillerAddonRandomizer;

