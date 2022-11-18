import data from './data.json';
import "./App.css";
import { getRandomItem, getRandomSet } from './components/constants';
import Killer from './components/Killer';
import KillerPerk from './components/KillerPerk';
import SurvivorRandomizer from './components/SurvivorRandomizer';
import SurvivorItemRandomizer from './components/SurvivorItemRandomizer';
import SurvivorPerkRandomizer from './components/SurvivorPerkRandomizer';


const KillerRandomizer = () => {
	const { item } = getRandomItem(data.killers);
	return <Killer name={item.name} image={item.image} />
}

const KillerPerkRandomizer = () =>{
	const killerPerks = getRandomSet(data.killerPerks, 4);
	return (
		<div className="perks">
			{killerPerks.map(killerPerk => 
				<KillerPerk key={killerPerk.name} name={killerPerk.name} image={killerPerk.image} />
			)}
		</div>
	);
}

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
