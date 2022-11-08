import React from 'react';
import PropTypes from 'prop-types';
import SVG from '@components/svg';

import styles from './styles.module.scss';

export const Header = () => {
	return (
		<div className={styles.container} id={'header'}>
			<div>
				<div>
					<div className={styles.header}>
						<div>
							<div className={styles.item}>
								<a href="#rsvp">RSVP</a>
							</div>
							<div className={styles.item}>
								<a href="#details">Details</a>
							</div>
							<div className={styles.logo}>
								<SVG name="logo" />
							</div>
							<div className={styles.item}>
								<a href="#gifts">Gifts</a>
							</div>
							<div className={styles.item}>
								<a href="#gallery">Gallery</a>
							</div>
						</div>
						<div className={styles.logoMobile}>
							<SVG name="logo" />
						</div>
						<div className={styles.date}>
							<SVG name="date" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
