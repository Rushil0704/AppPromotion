const AboutUs = () => {
    return (
        <div className="container mx-auto px-4 py-16">
            <div className="max-w-4xl">
                <h1 className="text-5xl font-bold mb-8">About Us</h1>

                <section className="mb-12">
                    <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        We're dedicated to helping developers and entrepreneurs promote their applications effectively.
                        Our platform provides innovative tools and resources to maximize app visibility and user engagement.
                    </p>
                </section>

                <section className="mb-12">
                    <h2 className="text-3xl font-bold mb-4">Our Story</h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                        Founded in 2024, AppPromotion began with a simple idea: make app marketing accessible to everyone.
                        We recognized that many talented developers struggled with the promotional aspect of their work.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Today, we serve thousands of app developers worldwide, providing them with the tools and knowledge
                        they need to succeed in the competitive app marketplace.
                    </p>
                </section>

                <section className="mb-12">
                    <h2 className="text-3xl font-bold mb-4">Our Values</h2>
                    <ul className="space-y-4">
                        <li className="text-lg text-gray-700">
                            <strong>Innovation:</strong> We constantly evolve our platform to meet the changing needs of app developers.
                        </li>
                        <li className="text-lg text-gray-700">
                            <strong>Transparency:</strong> We believe in honest communication and clear pricing with no hidden fees.
                        </li>
                        <li className="text-lg text-gray-700">
                            <strong>Support:</strong> Our team is always ready to help you succeed with your app promotion.
                        </li>
                        <li className="text-lg text-gray-700">
                            <strong>Community:</strong> We foster a community where developers can learn from each other.
                        </li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-3xl font-bold mb-4">Our Team</h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Our team consists of experienced marketing professionals, software engineers, and app industry experts
                        who are passionate about helping your app succeed.
                    </p>
                </section>
            </div>
        </div>
    )
}

export default AboutUs
