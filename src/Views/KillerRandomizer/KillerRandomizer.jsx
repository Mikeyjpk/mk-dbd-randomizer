import React from 'react';
import './KillerRandomizer.scss';
import KillerRandomizer from '../Randomizer/KillerRandomizer';
import KillerPerkRandomizer from '../Randomizer/KillerPerkRandomizer';
import MapRandomizer from '../Randomizer/MapRandomizer';

const KillerRandomizer123 = () => {
	return (
		<div className="killer-randomizer">
            <KillerRandomizer />
			<KillerPerkRandomizer />
			<MapRandomizer />Killer Randomizer
		</div>
	);
};

export default KillerRandomizer123;

// need to change name of this function, KillerRandomizer is used twice, next goal do this ^^^
