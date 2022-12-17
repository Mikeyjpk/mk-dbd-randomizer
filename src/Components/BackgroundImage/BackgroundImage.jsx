import React from 'react';
import './BackgroundImage.scss';
import backgrounds from '../../Images/backgrounds/backgrounds';

const BackgroundImage = ({ backgroundIndex }) => {
	return (
		<div className="background-image">
			<img className="background-image__image" src={backgrounds[backgroundIndex]} />
		</div>
	);
};

export default BackgroundImage;