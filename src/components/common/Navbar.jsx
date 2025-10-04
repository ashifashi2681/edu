import React from "react";
import CustomButton from "../ui/CustomButton";
import { navData } from "@/lib/navigation";
import NavItem from "../ui/NavItem";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import MenuButton from "../ui/MenuButton";

function Navbar() {

	return (
		<header className="container py-3 flex items-center justify-between">
			<MenuButton data={navData} />
			<div className="border px-5">
				<Link href={"/"}>
					<Image
						src={"/logo.png"}
						width={50}
						height={10}
						alt="logo"
					/>
				</Link>
			</div>
			<nav className="md:hidden">
				<ul className="flex space-x-10">
					
						<NavItem data={navData}/>
			
				</ul>
			</nav>
			<CustomButton className={"flex items-center gap-2"}>
				Join <MoveRight className="sm:hidden" size={16} />
			</CustomButton>
		</header>
	);
}

export default Navbar;
