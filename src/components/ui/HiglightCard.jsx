import React from 'react'

function HiglightCard() {
  return (
		<div className="bg-white p-8 shadow-sm rounded-2xl flex flex-col items-center justify-center w-64 aspect-square">
			<h5 className="text-xl font-[500]">200K+</h5>
			<p className="text-sm font-[500] uppercase mb-6">active users</p>
			<span className="text-xs text-wrap text-center text-gray-400">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
				sunt quos! Fugit laudantium odio nesciunt
			</span>
		</div>
  );
}

export default HiglightCard