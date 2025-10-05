import { Geist, Geist_Mono, Poppins, Patrick_Hand } from "next/font/google";
import "./globals.css";
import "swiper/css";
import "swiper/css/free-mode";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import SplashScreen from "@/components/common/Splash";
import SmoothScrollLayout from "@/components/common/SmoothScrollLayout";
import MouseGradient from "@/components/ui/MouseGradient";

// const geistSans = Geist({
// 	variable: "--font-geist-sans",
// 	subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
// 	variable: "--font-geist-mono",
// 	subsets: ["latin"],
// });
const poppins = Poppins({
	variable: "--font-poppins",
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const patric = Patrick_Hand({
	variable: "--font-patric-hand",
	subsets: ["latin"],	
	weight: ["400"],
})


export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body
				className={` ${poppins.variable} ${patric.variable} font-poppins antialiased`}>
				{/* <SplashScreen></SplashScreen> */}
				<main className="min-h-screen bg-[#566e6e ">
					<Navbar />
					<MouseGradient/>
					{children}
					<Footer />
				</main>
			</body>
			<SmoothScrollLayout />
		</html>
	);
}
