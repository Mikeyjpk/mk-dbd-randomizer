import React from 'react';
import './Killer.scss';

const Killer = ({ name, image }) => {
	return (
		<div className="killer">
			<div>
				<b>Name: </b>
				{name}
			</div>
			<img src={image} alt={name} />
		</div>
	);
};

export default Killer;
