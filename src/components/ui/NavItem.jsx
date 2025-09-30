"use client";
import { ChevronDown, ChevronRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function NavItem({ data, nested = false }) {
	const pathname = usePathname();
	const isActive = data.path === pathname;

	return (
		<li className="relative">
			<Link
				href={data?.path || "#"}
				className={`peer flex items-center text-sm font-[500] px-4 py-2 text-gray-700 hover:text-bl-25 transition ${
					isActive && "border-b-2 border-b-bl-200"
				}`}>
				{data?.label}
				{data?.sub && data?.sub.length > 0 && (
					<span className="ml-1">
						{nested ? (
							<ChevronRight size={16} />
						) : (
							<ChevronDown size={16} />
						)}
					</span>
				)}
			</Link>

			{data?.sub && data?.sub.length > 0 && (
				<ul
					className={`absolute shadow-md rounded p-2 bg-white min-w-[200px] hidden peer-hover:block hover:block ${
						nested ? "left-full top-0" : "left-0 top-full"
					}`}>
					{data?.sub?.map((sub, i) => (
						<NavItem key={i} data={sub} nested />
					))}
				</ul>
			)}
		</li>
	);
}

export default NavItem;
