const Hero = () => {
	return (
		<div className="relative w-full bg-white overflow-hidden home_banner">
			<div className="container relative z-10">
				<div className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-12">
					{/* Left Side - Text Content */}
					<div className="sm:mb-[200px] w-full md:w-auto flex flex-col justify-center items-center md:items-start md:justify-start text-center md:text-left">
						<h1 className="font-poppins text-2xl md:text-5xl lg:text-6xl font-bold leading-8 md:leading-[62.47px] mb-8 md:mb-8 ">
							Scan, Analyze, and Choose Healthier Food with{" "}
							<span className="text-green-600">FactsScan</span>
						</h1>

						<p className="font-poppins text-xl md:text-3xl font-normal leading-7 md:leading-[39.52px] mb-8 md:mb-[38px] text-gray-500">
							Scan and Decode Packaged Food Labels with India’s
							1st AI-Powered Food Intelligence Platform –
							FactsScan
						</p>

						{/* App Download Links */}
						<div className="flex  sm:flex-row gap-4">
							<a href="https://play.google.com/store/apps/details?id=com.dws.factsscan">
								<img
									src="https://factsscan.com/wp-content/uploads/2025/09/google_play_en.svg.svg"
									alt=""
								/>
							</a>

							<a href="https://apps.apple.com/in/app/factsscan/id6743693074">
								<img
									src="https://factsscan.com/wp-content/uploads/2025/09/app_store.svg"
									alt=""
								/>
							</a>
						</div>
					</div>

					{/* Right Side - Mobile Image */}
					<div className="w-full mx-auto text-center">
						<img
							src="https://factsscan.com/wp-content/uploads/2025/10/investor.gif"
							alt="FactsScan App"
							className="w-full max-w-sm md:max-w-md lg:max-w-lg  object-contain max-h-none md:max-h-full min-h-auto md:min-h-96 mx-auto top-10 right-20 relative"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Hero