import Heading from '../Common/Heading';

const Product = () => {
	return (
		<div className='container pt-19 pb-16 flex flex-col gap-10'>
			<Heading text="Know your" heighlight="product" />
			<div className=' flex flex-col'>
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
					{/* Left Section - Product Image and Details */}
					<div className="flex flex-col items-center">
						<div className="relative">
							<img
								src="https://factsscan.com/wp-content/uploads/2025/07/Know-your-product-image-1.png"
								className="w-[660px] h-[500px]"
								alt="Lay's Potato Chips"
							/>
						</div>

						{/* Product Info */}
					</div>

					{/* Right Section - Description */}
					<div className="flex flex-col justify-center px-4 lg:px-8">
						<h3 className="text-4xl font-bold mb-4 leading-tight">
							Check the quality of your food effortlessly with our
							app.
						</h3>
						<p className="text-gray-600 text-lg leading-relaxed">
							Wondering about the quality of your food? FactsScan
							has the answers! With a quick scan, our app analyzes
							food labels instantly, helping you identify the
							healthiest options and avoid the ones that aren't.
						</p>
					</div>
				</div>

				{/* Second Row */}
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
					{/* Left Section - Description */}
					<div className="flex flex-col justify-center px-4 lg:px-8">
						<h3 className="text-4xl font-bold mb-4 leading-tight">
							Easy Tracking with Ingredient & Nutrition Insights
						</h3>
						<p className="text-gray-600 text-lg leading-relaxed">
							Effortlessly visualize and track both nutrition
							values and ingredient details with our intuitive
							chart displays. From calories to harmful additives,
							FactsScan breaks it all down so you can make
							informed, healthier choices with every scan.
						</p>
					</div>

					{/* Right Section - Product Image */}
					<div className="flex flex-col items-center">
						<div className="relative">
							<img
								src="https://factsscan.com/wp-content/uploads/2025/07/Know-your-product-image-2.png"
								className="w-[660px] h-[500px]"
								alt="Nutrition Tracking"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Product