import React from 'react';
import PropTypes from 'prop-types';

import SVG from '@components/svg';

import styles from './styles.module.scss';

export const Details = () => {
	return (
		<div className={styles.container} id={'details'}>
			<div>
				<h2>Event Details</h2>
				<div className={styles.where}>
					<h3>When &amp; Where</h3>
					<div>
						<div>
							<p>Saturday, March 25th 2023</p>
							<p>Ceremony @ 5:30pm</p>
							<p>
								<strong>Florence Nature Park Event Center</strong>
								<br />
								7200 Nature Park Dr,
								<br />
								Florence, KY 41042
							</p>
							<p>
								<a
									href="https://goo.gl/maps/SKH9U7DcMZ8J37cb8"
									target="_blank"
									rel="noreferrer"
								>
									Directions
								</a>
							</p>
						</div>
						<div></div>
					</div>
				</div>
				<div className={styles.itineraryAndHotel}>
					<div className={styles.itinerary}>
						<h3>Itinerary</h3>
						<div>
							<div className={styles.item}>
								<div className={styles.time}>5:00PM</div>
								<div className={styles.icon}>
									<SVG name="drink" />
								</div>
								<div className={styles.text}>Doors Open</div>
							</div>

							<div className={styles.item}>
								<div className={styles.time}>5:30PM</div>
								<div className={styles.icon}>
									<SVG name="arch" />
								</div>
								<div className={styles.text}>Ceremony</div>
							</div>

							<div className={styles.item}>
								<div className={styles.time}>5:45PM</div>
								<div className={styles.icon}>
									<SVG name="camera" />
								</div>
								<div className={styles.text}>Photos</div>
							</div>

							<div className={styles.item}>
								<div className={styles.time}>6:15PM</div>
								<div className={styles.icon}>
									<SVG name="cart" />
								</div>
								<div className={styles.text}>Dinner</div>
							</div>

							<div className={styles.item}>
								<div className={styles.time}>7:00PM</div>
								<div className={styles.icon}>
									<SVG name="cake" />
								</div>
								<div className={styles.text}>Dessert</div>
							</div>

							<div className={styles.item}>
								<div className={styles.time}>7:45PM</div>
								<div className={styles.icon}>
									<SVG name="dance" />
								</div>
								<div className={styles.text}>First Dance</div>
							</div>

							<div className={styles.item}>
								<div className={styles.time}>10:00PM</div>
								<div className={styles.icon}>
									<SVG name="car" />
								</div>
								<div className={styles.text}>Event Ends</div>
							</div>
						</div>
					</div>
					<div className={styles.hotel}>
						<h3>Accommodations</h3>
						<div>
							<p className={styles.small}>
								There are several accommodation options in the Florence area.
								We&apos;ve listed one below that a few guests have already
								booked, but feel free to stay at any lodging that best fits your
								needs.
							</p>
							<p>
								<strong>Hyatt Place Cincinnati Airport/Florence</strong>
								<br />
								300 Meijer Dr,
								<br />
								Florence, KY 41042
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

Details.propTypes = {};

Details.defaultProps = {};

export default Details;
