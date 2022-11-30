import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.scss';

export const Gifts = () => {
	return (
		<div className={styles.container} id={'gifts'}>
			<div className={styles.top}>
				<h2>Wedding Gifts</h2>
				<p>
					In lieu of gifts on our special day, feel free to donate to one of the
					amazing non-profits below.
				</p>
			</div>
			<div className={styles.items}>
				<div>
					<div>
						<a
							href="https://www.womenhelpingwomen.org/"
							target="_blank"
							rel="noreferrer"
						>
							<img src="/images/women-helping-women.png" />
						</a>
					</div>
					<h3>Women Helping Women</h3>
					<p>
						Cincinnati based organization focused on crisis intervention and
						prevention advocacy for gender-based violence. Believes in serving
						all survivors with a specific focus on marginalized groups.
					</p>
					<p>
						<a
							href="https://www.youtube.com/watch?v=ly4ZdkU1aBQ&ab_channel=WomenHelpingWomenofSWOhio"
							target="_blank"
							rel="noreferrer"
						>
							Learn more
						</a>{' '}
						about Women Helping Women and how they adovate and promote a
						nonviolent, equitable, and just future.
					</p>
					<a
						className={styles.button}
						href="https://womenhelpingwomen.app.neoncrm.com/np/clients/womenhelpingwomen/donation.jsp"
						target="_blank"
						rel="noreferrer"
					>
						Donate
					</a>
				</div>
				<div>
					<div>
						<a href="https://www.chaoc.org/" target="_blank" rel="noreferrer">
							<img src="/images/chaoc.png" />
						</a>
					</div>
					<h3>Congenital Heart Alliance of Cincinnati</h3>
					<p>
						<a href="https://www.chaoc.org/" target="_blank" rel="noreferrer">
							CHAOC
						</a>{' '}
						is commited to helping patients and families impacted by congenital
						heart defects - focused on funding groundbreaking research,
						encouraging global collaboration, and promoting well-being
						initiatives.
					</p>
					<p>
						Laura has extended family directly impacted by CHD. This
						organization supports local Cincinnati hospitals and runs a golf
						camp for kids with heart defects.
					</p>
					<p>
						<a
							href="https://www.youtube.com/watch?v=NbPjxr-jSbs&ab_channel=CongenitalHeartAllianceofCincinnati"
							target="_blank"
							rel="noreferrer"
						>
							Learn More
						</a>{' '}
						about CHAOC.
					</p>
					<a
						className={styles.button}
						href="https://www.chaoc.org/donate/"
						target="_blank"
						rel="noreferrer"
					>
						Donate
					</a>
				</div>
				{/* <div>
					<div>
						<a
							href="https://www.groundworkorv.org/"
							target="_blank"
							rel="noreferrer"
						>
							<img src="/images/groundwork-ohio-river-valley.png" />
						</a>
					</div>
					<h3>Groundwork Ohio River Valley</h3>
					<p>
						<a
							href="https://www.groundworkorv.org/"
							target="_blank"
							rel="noreferrer"
						>
							Groundwork
						</a>{' '}
						promotes healthy and resilient greenspaces by making the outdoors
						more inclusive and accessible. This environmental organization
						manages youth programs that help make Cincinnati greener and
						promotes the restoration of the urban ecosystem in underrepresented
						communities.
					</p>
					<p>
						Some of Groundwork&apos;s community tasks include; planting trees,
						building trails, removing invasive species, installing
						infrastructure amenities, and promoting climate safe neighborhoods.
					</p>
					<a
						className={styles.button}
						href="https://groundworkorv.networkforgood.com/projects/125989-everyday-giving"
						target="_blank"
						rel="noreferrer"
					>
						Donate
					</a>
				</div> */}
				<div>
					<div>
						<a href="https://prokids.org" target="_blank" rel="noreferrer">
							<img src="/images/pro-kids.png" />
						</a>
					</div>
					<h3>ProKids Cincinnati</h3>
					<p>
						Each year, hundreds of abused and neglected children are placed in
						Hamilton county protective services. These child victims need a
						powerful voice to advocate for their best interests.
					</p>
					<p>
						<a
							href="https://www.youtube.com/watch?v=6ePzI7GY2NI&t=3s&ab_channel=ProKidsCincinnati"
							target="_blank"
							rel="noreferrer"
						>
							Learn more
						</a>{' '}
						about CASA volunteers and how ProKids supports foster children by
						providing their advocates resources and training.
					</p>
					<a
						className={styles.button}
						href="https://prokids.org/donate-invest/"
						target="_blank"
						rel="noreferrer"
					>
						Donate
					</a>
				</div>
			</div>
		</div>
	);
};

Gifts.propTypes = {};

Gifts.defaultProps = {};

export default Gifts;
