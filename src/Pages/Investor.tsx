const Investor = () => {
    return (
        <div className="container mx-auto px-4 py-16">
            <div className="max-w-4xl">
                <h1 className="text-5xl font-bold mb-8">Investor Relations</h1>

                <section className="mb-12">
                    <h2 className="text-3xl font-bold mb-4">Investment Opportunities</h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                        AppPromotion is a rapidly growing platform in the mobile app marketing space. We're actively seeking
                        strategic investors to help us scale our operations and expand our market reach.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Our unique positioning and proven track record make us an attractive investment opportunity in the
                        burgeoning app development and marketing industry.
                    </p>
                </section>

                <section className="mb-12">
                    <h2 className="text-3xl font-bold mb-4">Market Opportunity</h2>
                    <ul className="space-y-4">
                        <li className="text-lg text-gray-700">
                            <strong>Market Size:</strong> The global app market is projected to reach $407 billion by 2026
                        </li>
                        <li className="text-lg text-gray-700">
                            <strong>Target Audience:</strong> 28+ million app developers and entrepreneurs worldwide
                        </li>
                        <li className="text-lg text-gray-700">
                            <strong>Growth Rate:</strong> 15% year-over-year growth in app marketing solutions
                        </li>
                        <li className="text-lg text-gray-700">
                            <strong>Competition:</strong> Limited direct competition with strong differentiation potential
                        </li>
                    </ul>
                </section>

                <section className="mb-12">
                    <h2 className="text-3xl font-bold mb-4">Our Performance</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-gray-100 p-6 rounded-lg">
                            <h3 className="text-2xl font-bold text-green-600 mb-2">5,000+</h3>
                            <p className="text-gray-700">Active Users</p>
                        </div>
                        <div className="bg-gray-100 p-6 rounded-lg">
                            <h3 className="text-2xl font-bold text-green-600 mb-2">$2.5M</h3>
                            <p className="text-gray-700">Annual Revenue</p>
                        </div>
                        <div className="bg-gray-100 p-6 rounded-lg">
                            <h3 className="text-2xl font-bold text-green-600 mb-2">45%</h3>
                            <p className="text-gray-700">Month-over-Month Growth</p>
                        </div>
                        <div className="bg-gray-100 p-6 rounded-lg">
                            <h3 className="text-2xl font-bold text-green-600 mb-2">92%</h3>
                            <p className="text-gray-700">Customer Retention Rate</p>
                        </div>
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="text-3xl font-bold mb-4">Use of Funds</h2>
                    <p className="text-lg text-gray-700 mb-6">
                        We're seeking $5 million in Series A funding to:
                    </p>
                    <ul className="space-y-3">
                        <li className="text-lg text-gray-700">
                            <strong>40% - Product Development:</strong> Enhance our AI-driven recommendation engine and analytics platform
                        </li>
                        <li className="text-lg text-gray-700">
                            <strong>30% - Sales & Marketing:</strong> Expand our global sales team and marketing initiatives
                        </li>
                        <li className="text-lg text-gray-700">
                            <strong>20% - Operations:</strong> Scale infrastructure and improve customer support
                        </li>
                        <li className="text-lg text-gray-700">
                            <strong>10% - Strategic Partnerships:</strong> Build integrations with major app stores and platforms
                        </li>
                    </ul>
                </section>

                <section className="mb-12">
                    <h2 className="text-3xl font-bold mb-4">Leadership Team</h2>
                    <p className="text-lg text-gray-700 mb-6">
                        Our team brings together decades of experience in app development, marketing, and SaaS operations
                        from leading companies including Google, Apple, Facebook, and Amazon.
                    </p>
                    <div className="space-y-4">
                        <div className="bg-gray-50 p-6 rounded-lg">
                            <h3 className="text-xl font-bold">Founder & CEO</h3>
                            <p className="text-gray-700">Previously VP Product at TechCorp, 10+ years app industry experience</p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-lg">
                            <h3 className="text-xl font-bold">CTO</h3>
                            <p className="text-gray-700">Ex-Google engineer, expertise in scalable distributed systems</p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-lg">
                            <h3 className="text-xl font-bold">Chief Marketing Officer</h3>
                            <p className="text-gray-700">Former CMO at MarketLeader, 15+ years B2B SaaS marketing</p>
                        </div>
                    </div>
                </section>

                <section className="bg-green-50 border border-green-200 p-8 rounded-lg">
                    <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
                    <p className="text-lg text-gray-700 mb-6">
                        Interested in investing in AppPromotion? We'd love to discuss partnership opportunities.
                    </p>
                    <a
                        href="mailto:investors@apppromotion.com"
                        className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
                    >
                        Contact Our Investment Team
                    </a>
                </section>
            </div>
        </div>
    )
}

export default Investor
