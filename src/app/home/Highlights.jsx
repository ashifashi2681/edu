import HiglightCard from "@/components/ui/HiglightCard";
import SectionContainer from "@/components/ui/SectionContainer";
import React from "react";
import * as motion from "motion/react-client";

function Highlights() {
	return (
		<SectionContainer title={"Highlights"}>
			<div className="flex flex-col items-center">
				<motion.p
				initial={{opacity: 0}}
				transition={{duration: 1.5, delay: 0.5}}
				whileInView={{opacity: 1}}
				viewport={{once: true}}
				className="text-sm w-4/6 text-center">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Minus ipsam odio nisi, itaque distinctio molestias soluta
					voluptas culpa maiores a iure dicta animi, assumenda
					cupiditate.
				</motion.p>
			</div>

			<div className="flex justify-center flex-wrap gap-6 lg:gap-5 md:gap-4 sm:gap-3 mt-12">
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					transition={{ duration: 1, delay: 0.2 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}>
					<HiglightCard />
				</motion.div>
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					transition={{ duration: 1, delay: 0.6 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}>
					<HiglightCard />
				</motion.div>
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					transition={{ duration: 1, delay: 1 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}>
					<HiglightCard />
				</motion.div>
			</div>
		</SectionContainer>
	);
}

export default Highlights;
