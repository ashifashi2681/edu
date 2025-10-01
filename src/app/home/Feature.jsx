import SectionContainer from '@/components/ui/SectionContainer'
import Image from 'next/image'
import React from 'react'

function Feature({title, para, img, rtl=false}) {
  return (
		<SectionContainer>
			<div className="flex gap-5 items-start">
				<div className={`flex-1 p-4 ${rtl && 'order-last'}`}>
					<Image
						src={img}
						alt={title}
						width={500}
						height={500}
						className="w-full h-full object-cover rounded-2xl"
					/>
				</div>
				<div className="flex-1 bg-green200 p-4">
					<h2 className="text-lg font-[600] mb-2 border-l-5 pl-3 border-l-bl-100">
						{title}
					</h2>
					<p className="text-sm leading-7">
						{para}
                        
					</p>
				</div>
			</div>
		</SectionContainer>
  );
}

export default Feature