import Accordian from "@/components/ui/Accordian";
import SectionContainer from "@/components/ui/SectionContainer";
import { faqsData } from "@/lib/faqs";
import Image from "next/image";
import React from "react";

function Faqs() {
	return (
		<SectionContainer
			title={"Frequently Asked Questions"}
			bg={"bg-red-100"}>
			<div className="grid grid-cols-2 md:grid-cols-1 gap-4">
				<div className="relative w-full h-[400px] flex justify-center  overflow-hidden rounded-2xl md:rounded-lg">
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
