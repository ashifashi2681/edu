import React from "react";

function SectionContainer({ children, title, bg }) {
	return (
		<section className={`w-full py-12 ${bg}`}>
			<div className="container">
				{title && (
					<div className="text-center">
						<h2 className="highlight-heading font-patric-hand ">
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
