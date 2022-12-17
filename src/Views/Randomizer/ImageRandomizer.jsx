
import React from 'react';
import { getRandomNumber } from './RandomizerConstants';
import BackgroundImage from '../../Components/BackgroundImage/BackgroundImage';
import backgrounds from '../../Images/backgrounds/backgrounds';

const ImageRandomizer = () => {
	const randomBackgroundIndex = getRandomNumber(backgrounds.length);
	return (
			<BackgroundImage backgroundIndex={randomBackgroundIndex} />
	);

}

export default ImageRandomizer;

