
import React from 'react';
import { getRandomItem } from './RandomizerConstants';
import BackgroundImage from '../../Components/BackgroundImage/BackgroundImage';
import data from '../../data.json';


const ImageRandomizer = () => {

	const { item } = getRandomItem(data.landingBackgrounds.image);
	return (
		<div className="backgroundImage">
			<BackgroundImage src={item.image} />
		</div>
	);

}

export default ImageRandomizer;

