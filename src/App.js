import './App.css';
import KillerRandomizer from './Components/KillerRandomizer';
import KillerPerkRandomizer from './Components/KillerPerkRandomizer';
import SurvivorRandomizer from './Components/SurvivorRandomizer';
import SurvivorItemRandomizer from './Components/SurvivorItemRandomizer';
import SurvivorPerkRandomizer from './Components/SurvivorPerkRandomizer';
import MapRandomizer from './Components/MapRandomizer';

const App = () => {
	return (
		<div className="App">
			<SurvivorRandomizer />
			<SurvivorItemRandomizer />
			<SurvivorPerkRandomizer />
			<MapRandomizer />
			<KillerRandomizer />
			<KillerPerkRandomizer />
			<MapRandomizer />
		</div>
	);
};

export default App;
