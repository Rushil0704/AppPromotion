import React from 'react'

export const Footer = () => {
  return (
		<div className="footer_section">
			<div className="container">
				<div className="pb-[26px] mb-[26px] flex justify-between items-center gap-10 flex-wrap border-b border-[#646568]">
					<div className="">
						<a href="#">
							<img
								src="https://factsscan.com/wp-content/uploads/2025/09/factsscan_logo.svg"
								alt=""
							/>
						</a>
					</div>
					<div className="flex gap-4">
						<a href="#">
							<img
								src="https://factsscan.com/wp-content/uploads/2025/09/app_store.svg"
								alt=""
							/>
						</a>
						<a href="#">
							<img
								src="https://factsscan.com/wp-content/uploads/2025/09/google_play_en.svg.svg"
								alt=""
							/>
						</a>
					</div>
				</div>
				<div className="flex flex-wrap justify-between items-center gap-2.5 mb-[65px]">
					<ul className="flex flex-wrap gap-[30px]">
						<li>
							<a
								href="#"
								className="text-[#64656] text-[18px] leading-7 font-medium"
							>
								Blog
							</a>
						</li>
						<li>
							<a
								href="#"
								className="text-[#64656] text-[18px] leading-7 font-medium"
							>
								Community
							</a>
						</li>
						<li>
							<a
								href="#"
								className="text-[#64656] text-[18px] leading-7 font-medium"
							>
								Terms &amp; Condition
							</a>
						</li>
						<li>
							<a
								rel="privacy-policy"
								href="#"
								className="text-[#64656] text-[18px] leading-7 font-medium"
							>
								Privacy Policy
							</a>
						</li>
					</ul>
					<div className="flex items-center gap-4">
						<a
							href="#"
							target="_blank"
						>
							<img
								src="https://factsscan.com/wp-content/uploads/2025/09/Instagram.svg"
								alt=""
							/>
						</a>
						<a
							href="#"
							target="_blank"
						>
							<img
								src="https://factsscan.com/wp-content/uploads/2025/09/facebook.svg"
								alt=""
							/>
						</a>
						<a
							href="#"
							target="_blank"
						>
							<img
								src="https://factsscan.com/wp-content/uploads/2025/09/youtube.svg"
								alt=""
							/>
						</a>
						<a href="#" target="_blank">
							<img
								src="https://factsscan.com/wp-content/uploads/2025/09/twitter.svg"
								alt=""
							/>
						</a>
						<a
							href="#"
							target="_blank"
						>
							<img
								src="https://factsscan.com/wp-content/uploads/2025/09/linkedin.svg"
								alt=""
							/>
						</a>
					</div>
				</div>
				<div className="text-[#646568] text-[20px] text-center mb-[47px] leading-[25px]">
					<p>
						© 2025 FactsScan | Designed and Developed by{" "}
						<a
							href="#"
							target="_blank" className='underline'
						>
							Dolphin Web Solution
						</a>
						.
					</p>
				</div>
			</div>
		</div>
  );
}
