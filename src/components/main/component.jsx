import React from 'react';
import PropTypes from 'prop-types';

import Header from '@components/header';
import RSVP from '@components/rsvp';
import Details from '@components/details';

import styles from './styles.module.scss';

export const Main = () => {
	return (
		<div className={styles.container}>
			<Header />
			<RSVP />
			<Details />
		</div>
	);
};

Main.propTypes = {};

Main.defaultProps = {};

export default Main;
