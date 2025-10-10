import ContactusForam from "@/components/foams/ContactusForam";
import SectionContainer from "@/components/ui/SectionContainer";
import * as motion from "motion/react-client";

export const metadata = {
	title: "EduStaq | Contact us",
	description: "knowledg at your fingertips",
};
function page() {
	return (
		<SectionContainer>
			<div className="flex items-start gap-5 md:flex-col">
				<div className="flex-2 lg:flex-1">
					<motion.p
						initial={{ opacity: 0 }}
						transition={{ duration: 0.5 }}
						animate={{ opacity: 1 }}
						className="uppercase text-sm text-bl-50 font-[500] tracking-[4px]">
						A touch
					</motion.p>
					<motion.h1
						initial={{ opacity: 0, y: 50 }}
						transition={{ duration: 0.6 }}
						animate={{ opacity: 1, y: 0 }}
						className="uppercase text-xxl font-[600] mb-4">
						contact us
					</motion.h1>
					<motion.p
						initial={{ opacity: 0, y: 50 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						animate={{ opacity: 1, y: 0 }}
						className="text-sm text-gray-500 leading-7">
						Lorem, ipsum dolor sit amet consectetur adipisicing
						elit. Soluta itaque dolor debitis sit? Tempore
						laboriosam ab similique, dolores praesentium ducimus,
						cum vel et quisquam saepe fugiat! Repudiandae molestias
						voluptatibus ipsam ea. Laudantium beatae accusantium
						ipsam iure odit iste, doloribus ipsa sunt natus,
						architecto eligendi delectus nulla! Nemo sint illum
						tempore!
					</motion.p>
				</div>
				<ContactusForam/>
				
			</div>
		</SectionContainer>
	);
}

export default page;
