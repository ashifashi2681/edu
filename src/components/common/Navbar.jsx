'use client'
import React, { useState } from "react";
import CustomButton from "../ui/CustomButton";
import { navData } from "@/lib/navigation";
import NavItem from "../ui/NavItem";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import MenuButton from "../ui/MenuButton";
import RegisterFormModal from "../foams/RegisterFormModal";

function Navbar() {
	const [isModalOpen, setIsModalOpen] = useState(false)

	const handleModal = () => {
		setIsModalOpen(true)
	}
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
			<CustomButton
				onClick={handleModal}
				className={"flex items-center gap-2"}>
				Join <MoveRight className="sm:hidden" size={16} />
			</CustomButton>
			<RegisterFormModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
		</header>
	);
}

export default Navbar;
