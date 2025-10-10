import React from "react";
import SectionContainer from "@/components/ui/SectionContainer";
import TestimonialCurousel from "@/components/TestimonialCurousel";
import * as motion from "motion/react-client";

function Testimonials() {
	
	return (
		<SectionContainer title={"Testimonials"}>
			<div className="flex flex-col items-center mb-3">
				<motion.p
					initial={{ opacity: 0 }}
					transition={{ duration: 1.5, delay: 0.5 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					className="text-sm w-4/6 text-center">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Minus ipsam odio nisi, itaque distinctio molestias soluta
					voluptas culpa maiores a iure dicta animi, assumenda
					cupiditate.
				</motion.p>
			</div>
			<TestimonialCurousel />
		</SectionContainer>
	);
}

export default Testimonials;
