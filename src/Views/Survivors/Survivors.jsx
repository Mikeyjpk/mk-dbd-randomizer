import React from 'react';
import Survivor from './Survivor';
import data from '../../data.json';
import './Survivors.scss';
import { Grid } from '@mui/material';

const Survivors = () => {
	return (
		<div className="survivors">
			<h2>Survivors</h2>
			<Grid container>
				{data.survivors.map((survivor) => (
					<Grid item key={survivor.name} xs={6} sm={4} md={2}>
						<Survivor name={survivor.name} image={survivor.image} />
					</Grid>
				))}
			</Grid>
		</div>
	);
};

export default Survivors;
