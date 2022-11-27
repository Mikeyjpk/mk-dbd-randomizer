import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import View from '../View/View';
import Killers from '../../Views/Killers/Killers';
import Killer from '../../Views/Killers/Killer';
import Randomizer from '../../Views/Randomizer/Randomizer';
import Survivors from '../../Views/Survivors/Survivors';
import Survivor from '../../Views/Survivors/Survivor';
import Landing from '../../Views/Landing/Landing';

const AppRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<View component={Landing} />} />
				<Route path="/killers">
					<Route index element={<View component={Killers} />} />
					<Route path=":killerId" element={<View component={Killer} />} />
				</Route>
				<Route path="/survivors">
					<Route index element={<View component={Survivors} />} />
					<Route path=":survivorId" element={<View component={Survivor} />} />
				</Route>
				<Route path="/randomizer" element={<View component={Randomizer} />} />
			</Routes>
		</BrowserRouter>
	);
};

export default AppRouter;
