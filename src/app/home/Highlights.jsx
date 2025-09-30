import HiglightCard from "@/components/ui/HiglightCard";
import SectionContainer from "@/components/ui/SectionContainer";
import React from "react";
import * as motion from "motion/react-client";

function Highlights() {
	return (
		<SectionContainer title={"Highlights"}>
			<div className="flex flex-col items-center">
				<p className="text-sm w-100 text-center">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Minus ipsam odio nisi, itaque distinctio molestias soluta
					voluptas culpa maiores a iure dicta animi, assumenda
					cupiditate.
				</p>
			</div>

			<div className="flex justify-center gap-6 mt-12">
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					transition={{ duration: 1.5 }}
					animate={{ opacity: 1, y: 25 }}>
					<HiglightCard />
				</motion.div>
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					transition={{ duration: 1.5 }}
					animate={{ opacity: 1, y: -25 }}>
					<HiglightCard />
				</motion.div>
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					transition={{ duration: 1.5 }}
					animate={{ opacity: 1, y: 25 }}>
					<HiglightCard />
				</motion.div>
			</div>
		</SectionContainer>
	);
}

export default Highlights;
