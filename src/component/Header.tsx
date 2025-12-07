import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronUp, ChevronDown } from "lucide-react";

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [isDropdownOpen, setIsDropdownOpen] = useState<string | null>(null);

	const navLinks = [
		{ label: "Blog", href: "/blog" },
		{ label: "About Us", href: "/about-us" },
		{
			label: "Contact Us",
			href: "/contact-us",
			submenu: [
				{ label: "Support", href: "/contact-us" },
				{ label: "Account Deletion", href: "/remove-account" },
			],
		},
		{ label: "Why Invest", href: "/investor" },
	];

	return (
		<div className="shadow-md sticky top-0 z-50 bg-white">
			<div className="container">
				<div className="flex justify-between items-center flex-wrap py-4">
					{/* Logo */}
					<div>
						<a
							className="block cursor-pointer"
							href="/"
						>
							<img
								src="https://factsscan.com/wp-content/uploads/2024/10/Logo.svg"
								alt="logo"
								className="h-12"
							/>
						</a>
					</div>

					{/* Mobile Menu Button */}
					<button
						className="md:hidden flex flex-col gap-1"
						onClick={() => setIsOpen(!isOpen)}
					>
						<span className="w-6 h-0.5 bg-gray-800"></span>
						<span className="w-6 h-0.5 bg-gray-800"></span>
						<span className="w-6 h-0.5 bg-gray-800"></span>
					</button>

					{/* Navigation Menu */}
					<nav
						className={`${isOpen ? "flex" : "hidden"
							} md:flex absolute md:relative top-16 md:top-0 left-0 right-0 md:left-auto md:right-auto bg-white md:bg-transparent flex-col md:flex-row gap-4 md:gap-8 p-4 md:p-0 shadow-md md:shadow-none`}
					>
						{navLinks.map((link) => (
							<div key={link.label} className="relative group">
								{link.submenu ? (
									<button
										onClick={() =>
											setIsDropdownOpen(
												isDropdownOpen === link.label
													? null
													: link.label
											)
										}
										className="text-gray-700 hover:text-gray-900 font-medium text-sm md:text-base transition-colors flex items-center gap-1"
									>
										{link.label}
										{isDropdownOpen === link.label ? (
											<ChevronUp
												size={18}
												className="transition-transform duration-300"
											/>
										) : (
											<ChevronDown
												size={18}
												className="transition-transform duration-300"
											/>
										)}
									</button>
								) : (
									<Link
										to={link.href}
										className="text-gray-700 hover:text-gray-900 font-medium text-sm md:text-base transition-colors flex items-center gap-1"
										onClick={() => setIsOpen(false)}
									>
										{link.label}
									</Link>
								)}

								{/* Dropdown Menu */}
								{link.submenu && (
									<div
										className={`${isDropdownOpen === link.label
											? "flex"
											: "hidden"
											} absolute left-0 md:left-0 mt-2 md:mt-0 md:pt-2 flex-col bg-white border border-gray-200 rounded-md shadow-lg md:shadow-md w-48 md:w-40 z-10`}
									>
										{link.submenu.map((item) => (
											<Link
												key={item.label}
												to={item.href}
												className="px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 text-sm transition-colors"
												onClick={() => {
													setIsDropdownOpen(null);
													setIsOpen(false);
												}}
											>
												{item.label}
											</Link>
										))}
									</div>
								)}
							</div>
						))}
					</nav>
				</div>
			</div>
		</div>
	);
};

export default Header;
