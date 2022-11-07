import React from 'react';
import PropTypes from 'prop-types';

import RSVP from '@components/rsvp';

import styles from './styles.module.scss';

export const Main = () => {
	return (
		<div className={styles.container}>
			<h1>Jake &amp; Laura</h1>
			<RSVP />
		</div>
	);
};

Main.propTypes = {};

Main.defaultProps = {};

export default Main;
