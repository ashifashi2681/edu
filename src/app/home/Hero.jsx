import CustomButton from '@/components/ui/CustomButton';
import SectionContainer from '@/components/ui/SectionContainer';
import { MoveRight } from 'lucide-react';
import Image from 'next/image';
import React from 'react'
import * as motion from "motion/react-client";
import RegisterFormWithBtn from '@/components/foams/RegisterFormWithBtn';
function Hero() {
  return (
		<motion.div
			initial={{ opacity: 0 }}
			transition={{ duration: 1.8 }}
			animate={{ opacity: 1 }}>
			<SectionContainer>
				<div className="flex relative">
					<div className="flex-1/3">
						<motion.h1
							initial={{ opacity: 0, y: 50 }}
							transition={{ duration: 1.5 }}
							animate={{ opacity: 1, y: 0 }}
							className="text-xxl font-[600] leading-15 lg:leading-13 md:leading-12 md:text-center mb-6 hero-title">
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit.
						</motion.h1>
						<motion.p
							initial={{ opacity: 0, y: 50 }}
							transition={{ duration: 1.5, delay: 1.2 }}
							animate={{ opacity: 1, y: 0 }}
							className="text-sm leading-7 mb-6 md:text-center">
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Perferendis et quas earum omnis illo laborum
							odit, amet ducimus alias animi odio adipisci
							doloribus molestiae recusandae!
						</motion.p>
						<motion.div
							className="md:flex justify-center"
							initial={{ opacity: 0 }}
							transition={{ duration: 1.5, delay: 2 }}
							animate={{ opacity: 1 }}>
							<RegisterFormWithBtn />
						</motion.div>
					</div>

					<div className=" flex-2 md:hidden">
						<div className="relative w-full h-[400px] flex justify-center overflow-hidden rounded-xl">
							<Image
								src="/hero.png"
								alt="hero image"
								fill
								className="object-cover"
								sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
								priority
							/>
							<div className="absolute inset-0 bg-gradient-to-r from-wh via-transparent to-transparent"></div>
						</div>
					</div>
				</div>
			</SectionContainer>
		</motion.div>
  );
}

export default Hero