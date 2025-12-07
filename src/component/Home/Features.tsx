const Features = () => {
  const features = [
    {
      icon: "https://factsscan.com/wp-content/uploads/2025/07/App-features-1.png",
      title: "Barcode Scanner",
      description:
        "Simply scan the barcode, and within seconds you'll receive a result that helps you determine the processing level of your food.",
    },
    {
      icon: "	https://factsscan.com/wp-content/uploads/2025/07/App-features-2.png",
      title: "Health Picks Backed by Experts",
      description:
        "Discover high-protein, high-fiber & expert-recommended products for a healthier you!",
    },
    {
      icon: "https://factsscan.com/wp-content/uploads/2025/07/App-features-3.png",
      title: "Smart Recommendation",
      description:
        "Get personalized suggestions for healthier products with our Smart Recommendation feature.",
    },
    {
      icon: "	https://factsscan.com/wp-content/uploads/2025/07/App-features-4.png",
      title: "Veg & Non-Veg Filter",
      description:
        "Filter products based on your dietary preferences - vegetarian or non-vegetarian options.",
    },
    {
      icon: "	https://factsscan.com/wp-content/uploads/2025/07/App-features-5.png",
      title: "Allergen Check",
      description:
        "Check for potential allergens and harmful ingredients to ensure safe food choices.",
    },
    {
      icon: "https://factsscan.com/wp-content/uploads/2025/07/App-features-6.webp",
      title: "Detailed Nutrition Facts",
      description:
        "Get comprehensive nutritional information including calories, protein, fiber, and more.",
    },
  ];

  return (
    <div className="pt-16 pb-12">
      <div className="container mx-auto px-4 gap-55 flex flex-col">
        <h2 className="text-center font-poppins text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          App<span className="text-green-600"> Features</span>
        </h2>

        {/* Features Grid - 2 rows x 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-60">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center bg-white rounded-[40px] shadow-lg p-8 relative pt-30">
              {/* Feature Card */}
              <div className="absolute left-1/2 transform -translate-x-1/2 -top-1/2 z-10 h-full w-full">
                {/* Circular Background */}
                <div className=" flex items-center justify-center">
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    className="w-32 h-32 md:w-80 md:h-80 object-contain"
                  />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl md:text-[30px] font-medium text-black mt-6 mb-4 ">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm md:text-[20px] leading-relaxed max-w-xs">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Features