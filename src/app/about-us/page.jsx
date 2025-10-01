import CustomButton from '@/components/ui/CustomButton';
import SectionContainer from '@/components/ui/SectionContainer';
import React from 'react'
import * as motion from 'motion/react-client'

export const metadata = {
	title: "EduStaq | About us",
	description: "knowledg at your fingertips",
};
function AboutUs() {
  return (
		<SectionContainer>
			<div className="flex items-center gap-5">
				<div className="flex-3 flex flex-wrap">
					<motion.div
						initial={{ opacity: 0, scale: 0 }}
						transition={{ duration: 0.6 }}
						animate={{ opacity: 1, scale: 1 }}
						whileHover={{ scale: 1.1 }}
						className="bg-green-300 rounded-2xl m-4 min-w-36 flex-1 h-80"></motion.div>
					<motion.div
						initial={{ opacity: 0, scale: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						animate={{ opacity: 1, scale: 1 }}
						whileHover={{
							scale: 1.1,
							transition: { duration: 0.6, delay: 0 },
						}}
						className="bg-pink-300 rounded-2xl m-4 min-w-96 flex-1 h-80"></motion.div>
					<motion.div
						initial={{ opacity: 0, scale: 0 }}
						transition={{ duration: 0.6, delay: 0.4 }}
						animate={{ opacity: 1, scale: 1 }}
						whileHover={{
							scale: 1.1,
							transition: { duration: 0.6, delay: 0 },
						}}
						className="bg-amber-300 rounded-2xl m-4 min-w-96 flex-1 h-80"></motion.div>
					<motion.div
						initial={{ opacity: 0, scale: 0 }}
						transition={{ duration: 0.6, delay: 0.6 }}
						animate={{ opacity: 1, scale: 1 }}
						whileHover={{
							scale: 1.1,
							transition: { duration: 0.6, delay: 0 },
						}}
						className="bg-blue-300 rounded-2xl m-4 min-w-36 flex-1 h-80"></motion.div>
				</div>
				<div className="flex-2">
					<motion.p
						initial={{ opacity: 0 }}
						transition={{ duration: 0.5 }}
						animate={{ opacity: 1 }}
						className="uppercase text-sm text-bl-50 font-[500] tracking-[4px]">
						a bit
					</motion.p>
					<motion.h1
						initial={{ opacity: 0, y: 50 }}
						transition={{ duration: 0.6 }}
						animate={{ opacity: 1, y: 0 }}
						className="uppercase text-xxl font-[600] mb-4">
						about us
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
					<motion.div
          initial={{opacity: 0}}
          transition={{duration: 0.6, delay: 0.4}}
          animate={{opacity: 1}}
          >

						<CustomButton className={"mt-12"}>
							Explore More
						</CustomButton>
					</motion.div>
				</div>
			</div>
		</SectionContainer>
  );
}

export default AboutUs