import React from 'react';
import { getRandomSet } from './RandomizerConstants';
import KillerAddon from '../Killers/KillerAddon';

const KillerAddonRandomizer = ({ killer }) => {
	const addons = getRandomSet(killer.addOns, 2);

	return (
		<div className="killer-addons">
			{addons.map((addon) => (
				<KillerAddon key={addon.name} name={addon.name} image={addon.image} />
			))}
		</div>
	);
};

export default KillerAddonRandomizer;
