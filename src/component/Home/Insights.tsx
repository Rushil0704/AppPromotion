import Heading from '../Common/Heading';
import Card from '../Common/Card';

const Insights = () => {
	const insightsData = [
		{
			id: 1,
			image: "https://factsscan.com/wp-content/uploads/2025/12/Hidden-Sugars-in-Packaged-Foods_-50-Names-You-Must-Know-Before-Buying.webp",

			title: "Hidden Sugars in Packaged Foods: 50+ Names You Must Know Before Buying",
			description:
				"Uncover the shocking truth about hidden sugars lurking in everyday packaged foods. Learn why manufacturers add...",
			author: "Sweety Patel",
			date: "04 Dec 2025",
			authorImage:
				"https://factsscan.com/wp-content/uploads/2025/07/sweety-patel-profile.png",
			href: "/blog/hidden-sugars",
		},
		{
			id: 2,
			image: "https://factsscan.com/wp-content/uploads/2025/11/How-to-Identify-Organic-Food-in-India_-A-Complete-Consumer-Guide.webp",

			title: "How to Identify Organic Food in India: A Complete Consumer Guide",
			description:
				"Discover how to confidently identify genuine organic food in India. Learn about certifications, label reading, and...",
			author: "Sweety Patel",
			date: "27 Nov 2025",
			authorImage:
				"https://factsscan.com/wp-content/uploads/2025/07/sweety-patel-profile.png",
			href: "/blog/organic-food-guide",
		},
		{
			id: 3,
			image: "https://factsscan.com/wp-content/uploads/2025/11/Top-Food-Ingredients-You-Should-Avoid-for-Better-Gut-Health.webp",

			title: "Top Food Ingredients You Should Avoid for Better Gut Health",
			description:
				"Your gut microbiome is the foundation of your overall wellness, affecting everything from digestion to immune function. Yet...",
			author: "Sweety Patel",
			date: "17 Nov 2025",
			authorImage:
				"https://factsscan.com/wp-content/uploads/2025/07/sweety-patel-profile.png",
			href: "/blog/gut-health",
		},
	];

	return (
		<div className="pt-20 pb-16 container flex flex-col gap-16">
			<Heading text="Health" heighlight="Insights" />
			<div className="container pb-20">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5 gap-x-[30px]">
					{insightsData.map((item) => (
						<Card
							key={item.id}
							image={item.image}
							title={item.title}
							description={item.description}
							author={item.author}
							date={item.date}
							authorImage={item.authorImage}
							href={item.href}
						/>
					))}
				</div>
				<div className="mt-10 flex justify-center items-center text-center">
					<a
						href=""
						className="bg-[#00b249] px-8 py-4 text-white text-[25px] leading-8 font-medium rounded-[40px]"
					>
						Exlpore More Insights
					</a>
				</div>
			</div>
		</div>

	);
}

export default Insights