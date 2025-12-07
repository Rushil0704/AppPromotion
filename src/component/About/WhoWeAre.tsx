import AboutSection from "./AboutSection";

const WhoWeAre = () => {
    return (
        <AboutSection
            title="Who"
            heighlight="We Are"
            imageSrc="https://factsscan.com/wp-content/uploads/2025/07/who-we-are-image.png"
            reverse={false}
        >
            <h3 className="text-2xl font-semibold mb-4">Who We Are</h3>
            <p className="mb-4">
                FactsScan is a revolutionary app that leverages advanced AI
                technology to help consumers make informed and healthier food choices.
                Our team is dedicated to building tools that decode packaged food
                labels and present transparent, actionable insights.
            </p>
            <p>
                With a simple barcode scan, you can instantly determine whether a
                product is a safe choice for you and your family.
            </p>
        </AboutSection>
    );
};

export default WhoWeAre;
