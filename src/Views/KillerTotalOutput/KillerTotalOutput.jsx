import React from 'react';
import './KillerTotalOutput.scss';
import KillerRandomizer from '../Randomizer/KillerRandomizer';
import KillerPerkRandomizer from '../Randomizer/KillerPerkRandomizer';
import MapRandomizer from '../Randomizer/MapRandomizer';

const KillerTotalOutput = () => {
	return (
		<div className="killer-total-output">
            <KillerRandomizer />
			<KillerPerkRandomizer />
			<MapRandomizer />
		</div>
	);
};

export default KillerTotalOutput;