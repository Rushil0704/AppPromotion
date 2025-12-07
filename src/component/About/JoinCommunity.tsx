const JoinCommunity = () => {
    return (
        <div className="container mx-auto my-12">
            <div className="bg-green-50 rounded-2xl p-8 md:p-12">
                <h3 className="text-3xl font-bold mb-4">
                    Join the FactsScan <span className="text-green-600">Community:</span>
                </h3>

                <p className="text-gray-700 mb-4">
                    We are committed to supporting you on your journey to a healthier
                    lifestyle. Join our community and connect with other users who are
                    passionate about making informed food choices.
                </p>

                <div className="mt-4 text-gray-700">
                    <p>
                        <strong>You can reach us at:</strong>
                    </p>
                    <p>
                        Email: <a className="underline" href="mailto:info@factsscan.com">info@factsscan.com</a>
                    </p>
                    <p>
                        Phone: <a className="underline" href="tel:+917802809720">+91 7802809720</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default JoinCommunity;
