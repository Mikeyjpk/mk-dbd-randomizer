import data from './data.json';
import "./App.css";
import { getRandomItem, getRandomSet } from './components/constants';
import Killer from './components/Killer';
import KillerPerk from './components/KillerPerk';
import KillerRandomizer from './components/KillerRandomizer';
import KillerPerkRandomizer from './components/KillerPerkRandomizer';
import SurvivorRandomizer from './components/SurvivorRandomizer';
import SurvivorItemRandomizer from './components/SurvivorItemRandomizer';
import SurvivorPerkRandomizer from './components/SurvivorPerkRandomizer';

const App = () => {
  return (
    <div className="App">
        <SurvivorRandomizer />
		<SurvivorItemRandomizer />
		<SurvivorPerkRandomizer />
		<KillerRandomizer />
		<KillerPerkRandomizer />
    </div>
  );
}

export default App;
