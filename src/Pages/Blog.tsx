import React from 'react'
import Heading from '../component/Common/Heading'
import Card from '../component/Common/Card'

const Blog = () => {
  const blogsData = [
    {
      id: 1,
      image: "https://factsscan.com/wp-content/uploads/2025/12/Hidden-Sugars-in-Packaged-Foods_-50-Names-You-Must-Know-Before-Buying.webp",
      title: "Hidden Sugars in Packaged Foods: 50+ Names You Must Know Before Buying",
      description: "Uncover the shocking truth about hidden sugars lurking in everyday packaged foods. Learn why manufacturers add...",
      author: "Sweety Patel",
      date: "04 Dec 2025",
      authorImage: "https://factsscan.com/wp-content/uploads/2025/07/sweety-patel-profile.png",
      href: "/blog/hidden-sugars",
    },
    {
      id: 2,
      image: "https://factsscan.com/wp-content/uploads/2025/11/How-to-Identify-Organic-Food-in-India_-A-Complete-Consumer-Guide.webp",
      title: "How to Identify Organic Food in India: A Complete Consumer Guide",
      description: "Discover how to confidently identify genuine organic food in India. Learn about certifications, label reading, and...",
      author: "Sweety Patel",
      date: "27 Nov 2025",
      authorImage: "https://factsscan.com/wp-content/uploads/2025/07/sweety-patel-profile.png",
      href: "/blog/organic-food-guide",
    },
    {
      id: 3,
      image: "https://factsscan.com/wp-content/uploads/2025/11/Top-Food-Ingredients-You-Should-Avoid-for-Better-Gut-Health.webp",
      title: "Top Food Ingredients You Should Avoid for Better Gut Health",
      description: "Your gut microbiome is the foundation of your overall wellness, affecting everything from digestion to immune function. Yet...",
      author: "Sweety Patel",
      date: "17 Nov 2025",
      authorImage: "https://factsscan.com/wp-content/uploads/2025/07/sweety-patel-profile.png",
      href: "/blog/gut-health",
    },
    {
      id: 4,
      image: "https://factsscan.com/wp-content/uploads/2025/12/Hidden-Sugars-in-Packaged-Foods_-50-Names-You-Must-Know-Before-Buying.webp",
      title: "Hidden Sugars in Packaged Foods: 50+ Names You Must Know Before Buying",
      description: "Uncover the shocking truth about hidden sugars lurking in everyday packaged foods. Learn why manufacturers add...",
      author: "Sweety Patel",
      date: "04 Dec 2025",
      authorImage: "https://factsscan.com/wp-content/uploads/2025/07/sweety-patel-profile.png",
      href: "/blog/hidden-sugars",
    },
    {
      id: 5,
      image: "https://factsscan.com/wp-content/uploads/2025/11/How-to-Identify-Organic-Food-in-India_-A-Complete-Consumer-Guide.webp",
      title: "How to Identify Organic Food in India: A Complete Consumer Guide",
      description: "Discover how to confidently identify genuine organic food in India. Learn about certifications, label reading, and...",
      author: "Sweety Patel",
      date: "27 Nov 2025",
      authorImage: "https://factsscan.com/wp-content/uploads/2025/07/sweety-patel-profile.png",
      href: "/blog/organic-food-guide",
    },
    {
      id: 6,
      image: "https://factsscan.com/wp-content/uploads/2025/11/Top-Food-Ingredients-You-Should-Avoid-for-Better-Gut-Health.webp",
      title: "Top Food Ingredients You Should Avoid for Better Gut Health",
      description: "Your gut microbiome is the foundation of your overall wellness, affecting everything from digestion to immune function. Yet...",
      author: "Sweety Patel",
      date: "17 Nov 2025",
      authorImage: "https://factsscan.com/wp-content/uploads/2025/07/sweety-patel-profile.png",
      href: "/blog/gut-health",
    },
  ];

  return (
		<div>
			<div className="pt-19 pb-16">
				<div className="container">
					<Heading text="Health" heighlight="insights" />
					<div className="text-center mt-[31px]">
						<p className="text-gray-600 text-lg leading-relaxed">
							FactsScan’s tips for a healthier diet
						</p>
					</div>
				</div>
			</div>

			<div className="container pb-20">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5 gap-x-[30px]">
					{blogsData.map((item) => (
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
			</div>
		</div>
  );
}

export default Blog