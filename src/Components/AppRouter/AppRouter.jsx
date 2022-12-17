import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import View from '../View/View';
import Killers from '../../Views/Killers/Killers';
import Killer from '../../Views/Killers/Killer';
import Randomizer from '../../Views/Randomizer/Randomizer';
import Survivors from '../../Views/Survivors/Survivors';
import Survivor from '../../Views/Survivors/Survivor';
import Landing from '../../Views/Landing/Landing';
import KillerTotalOutput from '../../Views/KillerTotalOutput/KillerTotalOutput'
import SurvivorTotalOutput from '../../Views/SurvivorTotalOutput/SurvivorTotalOutput'

const AppRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<View component={Landing} />} />
				<Route path="/killers" element={<View component={Killers} />} />
				<Route path="/killers/:killerId" element={<View component={Killer} />} />
				<Route path="/survivors" element={<View component={Survivors} />} />
				<Route path="/survivors/:survivorId" element={<View component={Survivor} />} />
				<Route path="/randomizer" element={<View component={Randomizer} />} />
				<Route path="/randomizer/killers" element={<View component={KillerTotalOutput} />} />
				<Route path="/randomizer/survivors" element={<View component={SurvivorTotalOutput} />} />
			</Routes>
		</BrowserRouter>
	);
};

export default AppRouter;
