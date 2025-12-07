import Mission from "../component/About/Mission";
import JoinCommunity from "../component/About/JoinCommunity";
import AboutCard from "../component/About/AboutCard";

const AboutUs = () => {
    return (
        <div>
            <div className="container mx-auto px-4 py-10">
                <h1 className="text-5xl font-bold mb-6 text-center">About Us</h1>
                <p className="text-center text-lg text-gray-600 max-w-3xl mx-auto">
                    Transforming Food Choices with India's First AI-Powered Food Scanner App
                </p>
            </div>

            {/* Three alternating cards */}
            <AboutCard
                title="Who"
                heighlight="We Are"
                imageSrc="https://factsscan.com/wp-content/uploads/2025/07/who-we-are-image.png"
                text={'whoText'}
                reverse={false}
            />

            <AboutCard
                title="What"
                heighlight="We Do"
                imageSrc="https://factsscan.com/wp-content/uploads/2025/07/what-we-do-image.png"
                text={'whatText'}
                reverse={true}
            />

            <AboutCard
                title="Our"
                heighlight="Values"
                imageSrc="https://factsscan.com/wp-content/uploads/2025/07/our-values-image.png"
                text={'valuesText'}
                reverse={false}
            />

            <Mission />
            <JoinCommunity />
        </div>
    )
}

export default AboutUs
