import React, { useState } from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.scss';

const MAX_CHARACTER_COUNT = 1000;

export const RSVP = ({ darkmode }) => {
	const [email, setEmail] = useState('');
	const [attending, setAttending] = useState('Yes');
	const [message, setMessage] = useState('');

	const [error, setError] = useState(null);
	const [success, setSuccess] = useState(false);
	const [loading, setLoading] = useState(false);

	const saveInput = (e) => {
		setError(null);
		if (e.target.id === 'email') {
			setEmail(e.target.value);
		} else if (e.target.id === 'message') {
			setMessage(e.target.value);
		}
	};

	const saveRadio = (e) => {
		setError(null);
		setAttending(e.target.value);
	};

	const validateEmail = (em) => {
		const re =
			/^(([^<>()\[\]\\.,:\s@`]+(\.[^<>()\[\]\\.,:\s@`]+)*)|(`.+`))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(em);
	};

	const submit = (e) => {
		e.preventDefault();

		setError(null);
		let errors = [];

		const emailEl = document.getElementById('email').value;
		const messageEl = document.getElementById('message').value;
		const attendingEl = document.getElementById('message').value;

		const emailValue = email ? email : emailEl;
		const messageValue = message ? message : messageEl;
		const attendingValue = attending ? attending : attendingEl;

		if (!emailValue || emailValue === '') {
			errors.push('Oops! You forgot to add your email address.');
		} else if (!validateEmail(emailValue)) {
			errors.push('Oops! Your email address is not valid.');
		}

		if (messageValue.length > MAX_CHARACTER_COUNT) {
			errors.push(
				`Oops! Your message is too long. Please keep it under ${MAX_CHARACTER_COUNT} characters`,
			);
		}

		if (errors.length > 0) return setError(errors);

		setLoading(true);

		const formData = new FormData();
		formData.append('email', emailValue);
		formData.append('attending', attendingValue);
		formData.append('message', messageValue);

		return fetch('https://getform.io/f/4c1819e7-fca1-4a68-8272-f65cdad740eb', {
			method: 'POST',
			body: formData,
		})
			.then((response) => {
				setLoading(false);
				setSuccess(true);
			})
			.catch((error) => {
				setLoading(false);
				setError(
					'Oops! Something went wrong and your form was not submitted. If you continue to have issues feel free to email me directly at lspraue@gmail.com.',
				);
			});
	};

	return (
		<div className={styles.container} id={'rsvp'}>
			<div className={styles.top}>
				<div>
					<h2>RSVP</h2>
				</div>
				<div>
					<h3>We&apos;re excited to celebrate with you!</h3>
					<h4>Kindly respond before March 11th.</h4>
				</div>
			</div>
			{success ? (
				<div className={styles.success}>
					<h3>Your RSVP was submitted!</h3>
					<p>
						If you have any questions feel free to reach out to Jake or Laura
						directly.
					</p>
				</div>
			) : (
				<form>
					<label htmlFor="name">Email Address</label>
					<input
						type="text"
						id="email"
						name="email"
						placeholder="jane.doe@gmail.com"
						onKeyDown={saveInput}
						onBlur={saveInput}
						tabIndex="0"
					/>
					<div className={styles.radioWrapper}>
						<label className={styles.radio}>
							Delighted to Attend
							<input
								type="radio"
								name="attending"
								value="Yes"
								onChange={saveRadio}
								checked={attending === 'Yes' ? true : false}
							/>
							<span className={styles.checkmark}></span>
						</label>

						<label className={styles.radio}>
							Regretfully Decline
							<input
								type="radio"
								name="attending"
								value="No"
								onChange={saveRadio}
								checked={attending === 'No' ? true : false}
							/>
							<span className={styles.checkmark}></span>
						</label>
					</div>
					<label htmlFor="message">Full Names of Those Attending</label>
					<textarea
						id="message"
						name="message"
						placeholder="I'll be attending with..."
						onKeyDown={saveInput}
						onBlur={saveInput}
						tabIndex="0"
					/>
					<button type="submit" onClick={submit} disabled={loading}>
						{loading ? 'Sending RSVP...' : 'Submit'}
					</button>
					{error &&
						error.map((er) => {
							return (
								<p key={er} className={styles.error}>
									{er}
								</p>
							);
						})}
				</form>
			)}
		</div>
	);
};

RSVP.propTypes = {
	darkmode: PropTypes.bool,
};

RSVP.defaultProps = {};

export default RSVP;
