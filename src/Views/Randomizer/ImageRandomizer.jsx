import React from 'react';
import { getRandomItem } from './RandomizerConstants';
import image from '../../Images/landingBackground/'

const ImageRandomizer = () => {

	const { item } = getRandomItem(image.any);
	return <Image  Image={item.image} />;

}

export default ImageRandomizer;



