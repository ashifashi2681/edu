import Faqs from "./home/Faqs";
import Hero from "./home/Hero";
import Highlights from "./home/Highlights";
import Testimonials from "./home/Testimonials";

export default function Home() {
	return (
		<div>
			<Hero />
			<Testimonials />
			<Highlights />
			<Faqs />
		</div>
	);
}
