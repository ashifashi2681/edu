import SectionContainer from "@/components/ui/SectionContainer";
import Image from "next/image";
import * as motion from "motion/react-client";
function Feature({ title, para, img, rtl = false }) {
	return (
		<SectionContainer>
			<div className="flex gap-5 items-start md:flex-col">
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 1, delay: 0.2 }}
					className={`flex-1 md:flex-initial  overflow-hidden p-4 relative w-full h-[450px] ${
						rtl && "order-last md:order-first"
					}`}>
					<Image
						src={img}
						alt={title}
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
						fill
						className="object- rounded-2xl lg:rounded-xl md:rounded-lg bg-amber-300"
						loading="lazy"
					/>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 1, delay: 0.2 }}
					className="flex-1 bg-green200 p-4">
					<h2 className="text-lg font-[600] mb-2 border-l-5 pl-3 border-l-bl-100">
						{title}
					</h2>
					<p className="text-sm leading-7">{para}</p>
				</motion.div>
			</div>
		</SectionContainer>
	);
}

export default Feature;
