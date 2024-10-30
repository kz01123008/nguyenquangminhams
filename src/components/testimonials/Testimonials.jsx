import React from 'react';
import './Testimonials.css';
import Image3 from '../../assets/avatar-3.svg';
import Image4 from '../../assets/nk1.jpg';
import Image5 from '../../assets/nk2.jpg';
import Image6 from '../../assets/nk3.jpg';


import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {

	const data = [
		{
			id: 1,
			image: Image3,
			title: "Nguyen Quang Minh",
			comment: (
				<>
					<img src={Image4} alt="Example" className="comment__image" />
					Vietnam Friendship Village Volunteer 10/10/2024
				</>
			),
		},
		{
			id: 2,
			image: Image3,
			title: "Nguyen Quang Minh",
			comment: (
				<>
					<img src={Image5} alt="Example" className="comment__image" />
					SOS children's village
				</>
			),
		},
		{
			id: 3,
			image: Image3,
			title: "Nguyen Quang Minh",
			comment: (
				<>
					<img src={Image6} alt="Example" className="comment__image" />
					Global Link Singapore
				</>
			),
		},
	];

	return (
		<section className="testimonials container section">

			<h2 className="section__title">Extracurricular</h2>

			<Swiper className="testimonial__container grid"
				modules={[Pagination]}
				spaceBetween={30}
				slidesPerView={1}
				loop={true}
				grabCursor={true}
				pagination={{ clickable: true }}>
				{data.map(({ id, image, title, comment }) => {
					return (
						<SwiperSlide className="testimonial__item" key={id}>
							<div className="thumb">
								<img src={image} alt="" />
							</div>
							<h3 className="testimonial__title">{title}</h3>
							<div className="comment">{comment}</div>
						</SwiperSlide>
					)
				})}
			</Swiper>
		</section>
	)
}

export default Testimonials;
