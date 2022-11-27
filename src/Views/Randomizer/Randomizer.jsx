import React from 'react';
import './Randomizer.scss';
import SurvivorRandomizer from './SurvivorRandomizer';
import SurvivorItemRandomizer from './SurvivorItemRandomizer';
import SurvivorPerkRandomizer from './SurvivorPerkRandomizer';
import KillerRandomizer from './KillerRandomizer';
import KillerPerkRandomizer from './KillerPerkRandomizer';
import MapRandomizer from './MapRandomizer';

const Randomizer = () => {
	return (
		<div className="randomizer">
			<SurvivorRandomizer />
			<SurvivorItemRandomizer />
			<SurvivorPerkRandomizer />
			<KillerRandomizer />
			<KillerPerkRandomizer />
			<MapRandomizer />
		</div>
	);
};

export default Randomizer;
