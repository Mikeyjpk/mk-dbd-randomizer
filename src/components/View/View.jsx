import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import './View.scss';

const View = ({ component: Component, componentProps = {} }) => {
	return (
		<div className="view">
			<Scrollbars className="view__scroll-bars">
				<div className="view__scroll-bars__component">
					<Component {...componentProps} />
				</div>
			</Scrollbars>
		</div>
	);
};

export default View;
