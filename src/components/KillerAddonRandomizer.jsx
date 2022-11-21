/* this is broken 

import React from 'react';
import { getRandomSet } from './constants';
import KillerAddon from './KillerAddon';
import data from '../data.json';

const KillerAddonRandomizer = () => {
	const KillerAddons = getRandomSet(data.Killers.addOns, 2);	

	return (
		<div className="KillerAddons">
			{KillerAddons.map(killerAddon => 
				<KillerAddon key={killerAddon.name} name={killerAddon.name} image={killerAddon.image} />
			)}
		</div>
	)
}

export default KillerAddonRandomizer;

*/