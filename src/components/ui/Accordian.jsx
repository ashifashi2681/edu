"use client";
import { ChevronsUpDown } from "lucide-react";
import React, { useRef, useState } from "react";

function Accordian({ data }) {
	const [openId, setOpenId] = useState(null);

	const handleClick = (i) => {
        setOpenId(openId === i ? null : i);
    };
	return (
		<>
			{data?.map((acc, i) => (
				<div key={i} className="border rounded-md overflow-hidden my-2">
					<div
						onClick={() => handleClick(i)}
						className="flex justify-between items-center bg-white p-4 cursor-pointer">
						<h3 className="text-sm font-[600]">{acc?.qt}</h3>
						<button
							>
							<ChevronsUpDown />
						</button>
					</div>
					<div className={`p-4 bg-wh border-l-5 border-l-bl-50 text-sm h-0 py-0 overflow-hidden transition-all duration-300 ${openId === i ? "h-auto py-4" : ""}`}>
						{acc?.ans}
					</div>
				</div>
			))}
		</>
	);
}

export default Accordian;
