import React from 'react';
import './BackgroundImage.scss';

const BackgroundImage = ({src}) => {
	return (
		<div className="background-image" style={ { backgroundImage: src } }>
		</div>
	);
};

export default BackgroundImage;