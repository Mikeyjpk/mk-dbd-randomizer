import React from 'react';
import './SurvivorTotalOutput.scss';
import SurvivorRandomizer from '../Randomizer/SurvivorRandomizer';
import SurvivorItemRandomizer from '../Randomizer/SurvivorItemRandomizer';
import SurvivorPerkRandomizer from '../Randomizer/SurvivorPerkRandomizer';
import MapRandomizer from '../Randomizer/MapRandomizer';

const SurvivorTotalOutput = () => {
	return (
		<div className="survivor-total-output">
            <SurvivorRandomizer />
			<SurvivorItemRandomizer />
            <SurvivorPerkRandomizer />
			<MapRandomizer />
		</div>
	);
};

export default SurvivorTotalOutput;