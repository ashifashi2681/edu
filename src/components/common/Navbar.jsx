import React from "react";
import { navData } from "@/lib/navigation";
import NavItem from "../ui/NavItem";
import Image from "next/image";
import Link from "next/link";
import MenuButton from "../ui/MenuButton";
import RegisterFormWithBtn from "../foams/RegisterFormWithBtn";

function Navbar() {
	
	return (
		<header className="container py-3 flex items-center justify-between">
			<MenuButton data={navData} />

			<Link href={"/"}>
				<div className="border px-5 relative w-auto h-[45px]">
					<Image
						src={"/logo.png"}
						fill
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
						className="object-contain"
						alt="logo"
					/>
				</div>
			</Link>

			<nav className="md:hidden">
				<ul className="flex space-x-10">
					<NavItem data={navData} />
				</ul>
			</nav>
			<RegisterFormWithBtn />
			
		</header>
	);
}

export default Navbar;
