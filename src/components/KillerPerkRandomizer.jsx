import React from 'react';
import { getRandomSet } from './constants';
import KillerPerk from './KillerPerk';
import data from '../data.json';

const KillerPerkRandomizer = () =>{
	const killerPerks = getRandomSet(data.killerPerks, 4);
	return (
		<div className="perks">
			{killerPerks.map(killerPerk => 
				<KillerPerk key={killerPerk.name} name={killerPerk.name} image={killerPerk.image} />
			)}
		</div>
	);
}

export default  KillerPerkRandomizer;