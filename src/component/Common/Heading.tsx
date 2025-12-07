interface HeadingProps {
    text: string;
    heighlight: string;
    className?: string;
}

const Heading = ({ text, heighlight, className }: HeadingProps) => {
    return (
        <h2 className={`text-center text-3xl md:text-4xl lg:text-5xl font-bold ${className}`}>
            {text} <span className="scan_img" > {heighlight}</span>
        </h2 >
    )
}

export default Heading;