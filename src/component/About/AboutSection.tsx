import Heading from "../Common/Heading";

interface AboutSectionProps {
    title?: string;
    heighlight?: string;
    imageSrc: string;
    reverse?: boolean;
    children?: React.ReactNode;
    className?: string;
}

const AboutSection = ({
    title,
    heighlight,
    imageSrc,
    reverse = false,
    children,
    className = "",
}: AboutSectionProps) => {
    return (
        <div className={`py-12 container mx-auto ${className}`}>
            {title && heighlight ? (
                <div className="mb-8">
                    <Heading text={title} heighlight={heighlight} />
                </div>
            ) : null}

            <div
                className={`flex flex-col lg:flex-row items-center gap-8 ${reverse ? "lg:flex-row-reverse" : ""
                    }`}
            >
                <div className="w-full lg:w-1/2 flex justify-center">
                    <img
                        src={imageSrc}
                        alt={title ?? "about-image"}
                        className="w-full max-w-lg object-cover rounded-[20px] shadow-md"
                    />
                </div>

                <div className="w-full lg:w-1/2">
                    <div className="relative">
                        {/* SVG curved background - flips when reverse is true */}
                        <svg
                            viewBox="0 0 800 320"
                            preserveAspectRatio="none"
                            className={`hidden lg:block absolute inset-0 h-full w-full z-0 ${reverse ? "transform -scale-x-100" : ""
                                }`}
                            aria-hidden="true"
                        >
                            <path
                                d="M0,40 Q80,0 160,20 T320,30 T480,25 T640,35 Q760,50 800,70 L800,320 L0,320 Z"
                                fill="#ecfdf5"
                            />
                        </svg>

                        <div className="relative z-10">
                            <div className="bg-transparent rounded-2xl p-8 md:p-12">
                                <div className="prose max-w-none text-gray-700">{children}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;
