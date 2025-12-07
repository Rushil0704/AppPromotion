interface CardProps {
    image: string;
    title: string;
    description: string;
    author: string;
    date: string;
    authorImage?: string;
    href?: string;
}

const Card = ({ image,  title, description, author, date, authorImage, href = "#" }: CardProps) => {
    return (
		<a href={href} className="block text-decoration-none hover:no-underline">
			<div
				className="bg-white rounded-[40px] overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 p-5 cursor-pointer h-full"
				style={{ boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)" }}
			>
			{/* Card Image Section */}
			<div className="relative">
				<img
					src={image}
					alt={title}
					className="w-full object-cover"
					style={{ width: "425px", height: "225px" }}
				/>
			</div>

			{/* Author Section - Below Image */}
			<div className="flex items-center gap-3 mt-4 mb-4">
				{authorImage && (
					<img
						src={authorImage}
						alt={author}
						className="w-10 h-10 rounded-full object-cover"
					/>
				)}
				<div>
					<p className="font-semibold text-gray-800 text-sm">
						{author}
					</p>
					<p className="text-gray-500 text-xs">{date}</p>
				</div>
			</div>

			{/* Card Content Section */}
			<div className="">
				{/* Title */}
				<h3 className="text-[25px] font-medium leading-8 mb-3 line-clamp-2">
					{title}
				</h3>

				{/* Description */}
				<p className="text-[#646568]  text-[20px] leading-relaxed line-clamp-2 ">
					{description}
				</p>
			</div>
			</div>
		</a>
	);
}

export default Card
