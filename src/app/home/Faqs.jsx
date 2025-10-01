import Accordian from "@/components/ui/Accordian";
import SectionContainer from "@/components/ui/SectionContainer";
import { faqsData } from "@/lib/faqs";
import Image from "next/image";
import React from "react";

function Faqs() {
	return (
		<SectionContainer title={"Frequently Asked Questions"} bg={"bg-red-100"}>
			<div className="grid grid-cols-2 gap-4">
				<div className="w-full h-full flex justify-center relative overflow-hidden rounded-2xl">
					<Image
						src="/faq.png"
						alt="faq"
						fill
						className="object-cover"
						loading="lazy"
					/>
				</div>

				<div>
					<Accordian data={faqsData} />
				</div>
			</div>
		</SectionContainer>
	);
}

export default Faqs;
