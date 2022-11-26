import "./App.css";
import KillerRandomizer from './components/KillerRandomizer';
import KillerPerkRandomizer from './components/KillerPerkRandomizer';
import SurvivorRandomizer from './components/SurvivorRandomizer';
import SurvivorItemRandomizer from './components/SurvivorItemRandomizer';
import SurvivorPerkRandomizer from './components/SurvivorPerkRandomizer';
import MapRandomizer from './components/MapRandomizer';

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
}

export default App;