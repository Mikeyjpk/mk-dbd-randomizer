// import data from './data.json';                                              <? deleted these? not being used
// import { getRandomItem, getRandomSet } from './components/constants';
// import Killer from './components/Killer';
// import KillerPerk from './components/KillerPerk';
import "./App.css";
import KillerRandomizer from './components/KillerRandomizer';
import KillerPerkRandomizer from './components/KillerPerkRandomizer';
import SurvivorRandomizer from './components/SurvivorRandomizer';
import SurvivorItemRandomizer from './components/SurvivorItemRandomizer';
import ItemAddonRandomizer from './components/ItemAddonRandomizer';
import SurvivorPerkRandomizer from './components/SurvivorPerkRandomizer';
import MapRandomizer from './components/MapRandomizer';


const App = () => {
  return (
    <div className="App">
        <SurvivorRandomizer />
		<SurvivorItemRandomizer />
    <ItemAddonRandomizer />
		<SurvivorPerkRandomizer />
    <MapRandomizer />
    <br></br>
		<KillerRandomizer />
		<KillerPerkRandomizer />
    <MapRandomizer />
    </div>
  );
}

export default App;
