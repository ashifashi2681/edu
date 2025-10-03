import React from 'react'

function HiglightCard() {
  return (
		<div className="bg-white p-8 lg:p-7 md:p-5 sm:p-3 shadow-sm rounded-2xl md:rounded-xl sm:rounded-lg flex flex-col items-center justify-center max-w-64 aspect-square">
			<h5 className="text-xl sm:text-lg font-[500]">200K+</h5>
			<p className="text-sm font-[500] uppercase mb-6 lg:mb-5 md:mb-4 sm:mb-3">active users</p>
			<span className="text-xs text-wrap text-center text-gray-400">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
				sunt quos! Fugit laudantium odio nesciunt
			</span>
		</div>
  );
}

export default HiglightCard