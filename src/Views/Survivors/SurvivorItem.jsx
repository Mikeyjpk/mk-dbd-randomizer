import React from 'react';
import './SurvivorItem.scss';

const SurvivorItem = ({ name, image }) => {
	return (
		<div className="survivor-item">
			<div>
				<b>Item: </b>
				{name}
			</div>
			<img src={image} alt={name} />
		</div>
	);
};

export default SurvivorItem;
