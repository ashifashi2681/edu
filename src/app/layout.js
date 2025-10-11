import { Geist, Geist_Mono, Poppins, Patrick_Hand } from "next/font/google";
import "./globals.css";
import "swiper/css";
import "swiper/css/free-mode";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import SplashScreen from "@/components/common/Splash";
import SmoothScrollLayout from "@/components/common/SmoothScrollLayout";
import MouseGradient from "@/components/ui/MouseGradient";
import { Toaster } from "react-hot-toast";
import Image from "next/image";
import Link from "next/link";

const poppins = Poppins({
	variable: "--font-poppins",
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const patric = Patrick_Hand({
	variable: "--font-patric-hand",
	subsets: ["latin"],
	weight: ["400"],
});

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body
				className={` ${poppins.variable} ${patric.variable} font-poppins antialiased`}>
				<Toaster position="top-center" reverseOrder={true} />
				<SplashScreen />
				<main className="min-h-screen bg-[#566e6e ">
					<Navbar />
					{/* <MouseGradient /> */}
					{children}
					<Link
						href={
							"https://wa.me/917034890206?text=Hello, I would like to know more about this platform."
						}
						target="_blank"
						className="fixed bottom-20 right-18 lg:right-16 md:right-10 sm:right-5 animate-bounce">
						<Image
							src="/WhatsApp.png"
							alt="whatsapp icon"
							width={60}
							height={60}
							loading="lazy"
						/>
					</Link>
					<Footer />
				</main>
			</body>
			<SmoothScrollLayout />
		</html>
	);
}
