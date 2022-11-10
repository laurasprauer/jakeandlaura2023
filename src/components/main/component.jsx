import React from 'react';
import PropTypes from 'prop-types';

import Header from '@components/header';
import RSVP from '@components/rsvp';
import Details from '@components/details';
import Gifts from '@components/gifts';
import Gallery from '@components/gallery';

import { Helmet } from 'react-helmet';

import styles from './styles.module.scss';

export const Main = () => {
	const isBrowser = typeof window !== 'undefined';
	const url = isBrowser ? window.location.href : 'https://jakeandlaura2023.com';
	const image = 'https://jakeandlaura2023.com/images/share-image.png';

	return (
		<div className={styles.container}>
			<Helmet>
				<meta
					name="robots"
					content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
				/>
				<title>Jake & Laura Get Married</title>
				<link rel="canonical" href={url} />
				<meta property="og:url" content={url} />
				<meta name="description" content="Join us on our special day." />
				<meta name="theme-color" content="#3c4775" />
				<meta property="og:locale" content="en_US" />
				<meta property="og:type" content="website" />
				<meta property="og:title" content="Jake & Laura Get Married" />
				<meta property="og:description" content="Join us on our special day." />
				<meta property="og:site_name" content="Jake & Laura 2023" />
				<meta property="og:image" key="og:image" content={image} />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:image" content={image} />
				<meta name="image" content={image} />
			</Helmet>

			<Header />
			<RSVP />
			<Details />
			<Gifts />
			<Gallery />
		</div>
	);
};

Main.propTypes = {};

Main.defaultProps = {};

export default Main;
