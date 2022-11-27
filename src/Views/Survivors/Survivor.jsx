import React from 'react';
import './Survivor.scss';

const Survivor = ({ name, image }) => {
	return (
		<div className="survivor">
			<div>
				<b>Name: </b>
				{name}
			</div>
			<img src={image} alt={name} />
		</div>
	);
};

export default Survivor;
