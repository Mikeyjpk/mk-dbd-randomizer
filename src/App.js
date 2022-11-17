import data from './data.json';
import "./App.css";
import { getRandomItem, getRandomSet } from './components/constants';
import SurvivorItem from './components/SurvivorItem';
import SurvivorPerk from './components/SurvivorPerk';
import Killer from './components/Killer';
import KillerPerk from './components/KillerPerk';
import SurvivorRandomizer from './components/SurvivorRandomizer';


const SurvivorItemRandomizer = () => {
	const { item } = getRandomItem(data.survivorItems);
	return (
		<div className="survivor">
			<SurvivorItem name={item.name} image={item.image} />
		</div>
	)
}

const SurvivorPerkRandomizer = () => {
	const survivorPerks = getRandomSet(data.survivorPerks, 4);
	return (
		<div className="perks">
			{survivorPerks.map(survivorPerk => 
				<SurvivorPerk key={survivorPerk.name} name={survivorPerk.name} image={survivorPerk.image} />
			)}
		</div>
	)
}

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
