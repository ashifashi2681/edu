"use client";
import SectionContainer from "@/components/ui/SectionContainer";
import { testimonial } from "@/lib/testimonial";
import { Quote } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

function Testimonials() {
	return (
		<SectionContainer title={"Testimonials"}>
			<Swiper className="h-fit bg-amber-600" spaceBetween={50} slidesPerView={4}>
				{testimonial?.map((test, i) => (
					<SwiperSlide key={i}>
						<div className="w-80 h-100 bg-bl-200 rounded-2xl -rotate-4 hover:rotate-0 transition-all duration-300">
							<div className="w-80 h-100 bg-wh shadow-2xl rotate-4 rounded-2xl p-4 hover:rotate-0 transition-all duration-300 flex flex-col items-center justify-center relative">
								<Image
									src="/avatar.png"
									alt="profile"
									width={100}
									height={100}
									className="w-20 h-20 rounded-full absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2"
								/>

								<h3 className="text-md font-[600]">
									{test?.name}
								</h3>
								<p className="text-sm text-gray-600">
									{test?.subject}
								</p>
								<Quote className="w-5 h-5 text-cyan-600 rotate-180 my-2" />
								<p className="text-center text-sm text-wrap line-clamp-8">
									{test?.message}
								</p>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</SectionContainer>
	);
}

export default Testimonials;
