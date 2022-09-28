import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.scss';

export const Main = () => {
	return (
		<div className={styles.container}>
			<h1>Main</h1>
		</div>
	);
};

Main.propTypes = {};

Main.defaultProps = {};

export default Main;
