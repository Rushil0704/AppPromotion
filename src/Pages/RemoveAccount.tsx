import Heading from "../component/Common/Heading"

const RemoveAccount = () => {
    return (
        <div className="min-h-screen py-16">
            <div className="container mx-auto px-4 ">
                <div className="bg-linear-to-b from-green-50 to-green-100 p-4 lg:p-20 flex flex-col gap-5 lg:gap-16 rounded-2xl">
                    <Heading text="Account" heighlight="Deletion Request" className="text-center mb-12" />

                    {/* Main Content Box */}
                    <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
                        <div className="lg:flex">
                            {/* Left: Content */}
                            <div className="w-full lg:w-1/2 px-8 p-6 md:px-12 flex flex-col justify-center">
                                <p className="text-gray-700 text-lg leading-relaxed">
                                    To delete your account, please email <a href="mailto:support@factsscan.com" className="text-green-600 hover:text-green-700 font-semibold underline">support@factsscan.com</a> with the subject '<strong>Account Deletion Request</strong>' and include your mobile number. Upon <span className="text-green-600 font-semibold">confirmation</span>, all your data, including profile information and usage history, will be permanently deleted within <strong>14 days</strong>.
                                </p>
                            </div>

                            {/* Right: Illustration */}
                            <div className="w-full lg:w-1/2 bg-green-50 px-8 md:px-12 flex items-center justify-center min-h-96">
                                <div className="w-full max-w-sm">
                                    <img src="/assets/remove-account-illustration.svg" alt="Account deletion illustration" className="w-full h-auto" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RemoveAccount
