import React from 'react';
import { getRandomSet } from './RandomizerConstants';
import SurvivorPerk from '../Survivors/SurvivorPerk';
import data from '../../data.json';

const SurvivorPerkRandomizer = () => {
	const survivorPerks = getRandomSet(data.survivorPerks, 4);
	return (
		<div className="perks">
			{survivorPerks.map((survivorPerk) => (
				<SurvivorPerk
					key={survivorPerk.name}
					name={survivorPerk.name}
					image={survivorPerk.image}
				/>
			))}
		</div>
	);
};

export default SurvivorPerkRandomizer;
