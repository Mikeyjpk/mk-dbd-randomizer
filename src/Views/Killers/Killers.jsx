import { Grid } from '@mui/material';
import React from 'react';
import data from '../../data.json';
import Killer from './Killer';
import './Killers.scss';

const Killers = () => {
	return (
		<div className="killers">
			<h2>Killers</h2>
			<Grid container>
				{data.killers.map((killer) => (
					<Grid item key={killer.name} xs={6} sm={4} md={2}>
						<Killer name={killer.name} image={killer.image} />
					</Grid>
				))}
			</Grid>
		</div>
	);
};

export default Killers;
