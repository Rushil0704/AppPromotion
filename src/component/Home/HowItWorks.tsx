import Heading from "../Common/Heading";

const HowItWorks = () => {
	const steps = [
		{
			title: "Scan Product",
			description:
				"Scan the food product's barcode to quickly determine if it is good for your health. Instantly access a detailed list of ingredients, nutritional value, and potential allergens, helping you make informed and healthier choices about what you consume.",
		},
		{
			title: "Analyze Results",
			description:
				"Get instant insights about the product's nutritional content and health rating. Our advanced algorithm analyzes ingredients and provides you with comprehensive health information.",
		},
		{
			title: "Choose Healthier",
			description:
				"Make informed decisions about your food choices. Compare products and select healthier alternatives based on detailed nutritional analysis and expert recommendations.",
		},
	];

	return (
		<div className="pt-16 pb-20">
			<div className="container mx-auto">
				{/* Heading */}
				<Heading text="How It" heighlight="Works" />

				<div className="flex flex-col lg:flex-row items-center justify-between gap-16">
					{/* Left Image */}
					<div className="w-full lg:w-[41%] flex justify-center">
						<img
							src="https://factsscan.com/wp-content/uploads/2025/07/How-it-works.png"
							alt="How it works"
							className="max-w-[520px] w-full h-auto"
						/>
					</div>

					{/* Right Timeline */}
					<div className="w-full lg:w-[59%] relative">
						{/* Vertical Line */}
						<div className="absolute left-3.5 top-0 bottom-0 w-[3px] bg-green-500"></div>

						<div className="space-y-12">
							{steps.map((step, index) => (
								<div
									key={index}
									className="flex gap-12 relative"
								>
									{/* Dot */}
									<div className="relative flex flex-col items-center">
										<div className="w-7 h-7 rounded-full bg-white border-4 border-green-500 z-10"></div>
									</div>

									{/* Curved Content Box */}
									<div className="relative w-full max-w-xl">
										{/* SVG Curved Background */}
										<svg
											viewBox="0 0 600 260"
											className="absolute inset-0 w-full h-full"
											preserveAspectRatio="none"
										>
											<path
												d="M20,40 
												 Q60,0 120,30 
												 T240,30 
												 T360,35 
												 T480,25 
												 Q580,40 570,120 
												 T560,220 
												 Q460,260 300,240 
												 T40,250 
												 Q0,200 20,40Z"
												fill="#ECFDF5"
											/>
										</svg>

										{/* Content */}
										<div className="relative p-12">
											<h3 className="sm:text-2xl text-[22px] font-bold mb-4">
												{step.title.split(" ")[0]}{" "}
												<span className="text-green-600">
													{step.title
														.split(" ")
														.slice(1)
														.join(" ")}
												</span>
											</h3>

											<p className="text-gray-600 leading-relaxed">
												{step.description}
											</p>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HowItWorks;
