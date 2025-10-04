import SectionContainer from "@/components/ui/SectionContainer";
import Image from "next/image";
import React from "react";

function Feature({ title, para, img, rtl = false }) {
	return (
		<SectionContainer>
			<div className="flex gap-5 items-start md:flex-col">
				<div
					className={`flex-1 md:flex-initial rounded-2xl lg:rounded-xl md:rounded-lg overflow-hidden p-4 relative w-full h-[450px] ${
						rtl && "order-last md:order-first"
					}`}>
					<Image
						src={img}
						alt={title}
						fill
						className="object-cover"
						loading="lazy"
					/>
				</div>
				<div className="flex-1 bg-green200 p-4">
					<h2 className="text-lg font-[600] mb-2 border-l-5 pl-3 border-l-bl-100">
						{title}
					</h2>
					<p className="text-sm leading-7">{para}</p>
				</div>
			</div>
		</SectionContainer>
	);
}

export default Feature;
