import { extraLinks, linkSet1, linkSet2 } from "@/lib/navigation";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import CustomButton from "../ui/CustomButton";
import { Facebook, Instagram, Linkedin, Send, Youtube } from "lucide-react";

function Footer() {
	return (
		<footer className="w-full bg-bk text-[#bbbbbb] py-16">
			<div className="container grid grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2 lg:gap-4">
				<section className="">
					<div className="border px-5 relative w-auto h-[45px]">
						<Image
							src={"/logo.png"}
							fill
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
							className="object-contain"
							alt="logo"
						/>
					</div>
					<p className="text-sm leading-7 mb-6">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Voluptatibus sint eveniet nemo vitae molestiae amet
						maiores.
					</p>
					<address>
						<p className="text-sm my-2">address</p>
						<p className="text-sm my-2">email</p>
						<p className="text-sm my-2">phone</p>
					</address>
				</section>
				<section className="sm:mt-6">
					<h6 className="text-base font-[600] text-wh mb-6 lg:mb-5">
						Courses
					</h6>
					<nav aria-label="Footer Navigation">
						<ul>
							{linkSet1?.map((link, i) => (
								<li key={i} className="my-2">
									<Link
										href={link.path}
										className="footer-link text-sm">
										{link.label}
									</Link>
								</li>
							))}
						</ul>
					</nav>
				</section>
				<section className="md:mt-6">
					<h6 className="text-base font-[600] text-wh mb-6 lg:mb-5">
						Career
					</h6>
					<nav aria-label="Footer Navigation">
						<ul>
							{linkSet2?.map((link, i) => (
								<li key={i} className="my-2">
									<Link
										href={link.path}
										className="footer-link text-sm">
										{link.label}
									</Link>
								</li>
							))}
						</ul>
					</nav>
				</section>
				<section className="lg:mt-6">
					<h6 className="text-base font-[600] text-wh mb-6 lg:mb-5">
						Connect Us
					</h6>
					<p className="text-sm mb-2">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
					</p>
					{/* email input and button */}
					<div className="flex items-center gap-2 mb-6">
						<input
							type="text"
							placeholder="Email"
							className="px-3 py-2 rounded-sm bg-wh text-bk outline-none border-none text-sm w-full"
						/>
						<CustomButton className={"rounded-sm !px-2"}>
							<Send size={22} />
						</CustomButton>
					</div>
					{/* social media icons */}
					<div className="flex items-center gap-4">
						<Link href={"#"}>
							<Instagram
								role="icon"
								aria-label="Instagram icon"
								className="social-icon"
							/>
						</Link>
						<Link href={"#"}>
							<Facebook
								role="icon"
								aria-label="Facebook icon"
								className="social-icon"
							/>
						</Link>
						<Link href={"#"}>
							<Linkedin
								role="icon"
								aria-label="Linkedin icon"
								className="social-icon"
							/>
						</Link>
						<Link href={"#"}>
							<Youtube
								role="icon"
								aria-label="Youtube icon"
								className="social-icon"
							/>
						</Link>
					</div>
				</section>
			</div>
			<div className="container h-0.5 bg-gray-800 my-6"></div>
			<div className="container mb-8">
				{extraLinks?.map((li, i) => (
					<Link
						href={li.path}
						key={i}
						className="px-6 border-r border-r-gray-700 footer-link text-xs/7">
						{li.label}
					</Link>
				))}
			</div>
			<div className="container">
				<small>&copy; 2025 All rights reserved.</small>
			</div>
		</footer>
	);
}

export default Footer;
