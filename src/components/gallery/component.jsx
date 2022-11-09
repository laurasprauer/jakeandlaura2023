import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.scss';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import Swiper core and required modules
import { Navigation, Pagination, A11y, Autoplay } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './overrides.scss';

export const Gallery = () => {
	return (
		<div className={styles.container} id={'gallery'}>
			<div>
				<h2>Gallery</h2>
				<p>
					A quick snapshot of the past two years of our relationship. We&apos;re
					looking forward to decades of happiness as a married couple.
				</p>
				<Swiper
					modules={[Navigation, Pagination, A11y, Autoplay]}
					style={{
						'--swiper-navigation-size': '30px',
					}}
					autoplay={{
						delay: 4000,
					}}
					spaceBetween={0}
					slidesPerView={1}
					navigation
					pagination={{ clickable: true }}
				>
					<SwiperSlide>
						<img src="/images/1.png" />
					</SwiperSlide>
					<SwiperSlide>
						<img src="/images/2.png" />
					</SwiperSlide>
					<SwiperSlide>
						<img src="/images/3.png" />
					</SwiperSlide>
					<SwiperSlide>
						<img src="/images/4.png" />
					</SwiperSlide>
					<SwiperSlide>
						<img src="/images/5.png" />
					</SwiperSlide>
					<SwiperSlide>
						<img src="/images/6.png" />
					</SwiperSlide>
					<SwiperSlide>
						<img src="/images/7.png" />
					</SwiperSlide>
					<SwiperSlide>
						<img src="/images/8.png" />
					</SwiperSlide>
					<SwiperSlide>
						<img src="/images/9.png" />
					</SwiperSlide>
					<SwiperSlide>
						<img src="/images/10.png" />
					</SwiperSlide>
					<SwiperSlide>
						<img src="./images/11.png" />
					</SwiperSlide>
					<SwiperSlide>
						<img src="./images/12.png" />
					</SwiperSlide>
					<SwiperSlide>
						<img src="./images/13.png" />
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
	);
};

Gallery.propTypes = {};

Gallery.defaultProps = {};

export default Gallery;
