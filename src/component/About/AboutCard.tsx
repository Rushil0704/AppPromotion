interface AboutCardProps {
    title: string;
    heighlight?: string;
    imageSrc: string;
    text: string;
    reverse?: boolean;
    className?: string;
}

const AboutCard = ({ title, heighlight, imageSrc, text, reverse = false, className = "" }: AboutCardProps) => {
    return (
        <div className={`py-8 container mx-auto ${className}`}>
            <div className={`flex flex-col lg:flex-row items-center gap-8 ${reverse ? 'lg:flex-row-reverse' : ''}`}>
                <div className="w-full lg:w-1/2 flex justify-center">
                    <img src={imageSrc} alt={title} className="w-full max-w-lg object-cover rounded-[20px] shadow-md" />
                </div>

                <div className="w-full lg:w-1/2 relative">
                    <svg viewBox="0 0 800 260" preserveAspectRatio="none" className={`hidden lg:block absolute inset-0 w-full h-full z-0 ${reverse ? 'transform -scale-x-100' : ''}`} aria-hidden="true">
                        <path d="M0,40 Q80,0 160,20 T320,30 T480,25 T640,35 Q760,50 800,70 L800,260 L0,260 Z" fill="#ecfdf5" />
                    </svg>

                    <div className="relative z-10">
                        <div className="bg-transparent p-8 md:p-10">
                            <h3 className="text-2xl md:text-3xl font-bold mb-4">
                                {title} {heighlight ? <span className="text-green-600">{heighlight}</span> : null}
                            </h3>

                            <p className="text-gray-700 leading-relaxed">
                                {text}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutCard;
