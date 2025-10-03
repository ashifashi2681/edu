import React from "react";

function SectionContainer({ children, title, bg }) {
	return (
		<section className={`w-full py-12 lg:py-10 md:py-8 sm:py-6 ${bg}`}>
			<div className="container">
				{title && (
					<div className="text-center">
						<h2 className="highlight-heading font-[600] ">
							{title}
						</h2>
					</div>
				)}
				<div className="mt-8">{children}</div>
			</div>
		</section>
	);
}

export default SectionContainer;
