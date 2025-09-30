import CustomButton from '@/components/ui/CustomButton';
import SectionContainer from '@/components/ui/SectionContainer';
import { MoveRight } from 'lucide-react';
import Image from 'next/image';
import React from 'react'
import * as motion from "motion/react-client";
function Hero() {
  return (
		<motion.div
			initial={{ opacity: 0 }}
			transition={{ duration: 1.8 }}
			animate={{ opacity: 1 }}>
			<SectionContainer>
				<div className="flex gap-2">
					<div className="flex-1/3">
						<motion.h1
							initial={{ opacity: 0, y: 50 }}
							transition={{ duration: 1.5 }}
							animate={{ opacity: 1, y: 0 }}
							className="text-xxl font-[600] leading-15 mb-6">
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit.
						</motion.h1>
						<motion.p
							initial={{ opacity: 0, y: 50 }}
							transition={{ duration: 1.5, delay: 1.2 }}
							animate={{ opacity: 1, y: 0 }}
							className="text-sm leading-7 mb-6">
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Perferendis et quas earum omnis illo laborum
							odit, amet ducimus alias animi odio adipisci
							doloribus molestiae recusandae!
						</motion.p>
						<motion.div initial={{opacity: 0}} transition={{duration: 1.5, delay: 2}} animate={{opacity: 1}}>
							<CustomButton className={"flex items-center gap-2"}>
								Join <MoveRight size={16} />
							</CustomButton>
						</motion.div>
					</div>

					<div className=" flex-2">
						<div className="relative w-full h-96">
							<Image
								src="/hero.png"
								alt="hero"
								fill
								className="object-contain"
							/>
						</div>
					</div>
				</div>
			</SectionContainer>
		</motion.div>
  );
}

export default Hero