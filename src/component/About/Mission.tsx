import Heading from "../Common/Heading";

const Mission = () => {
    return (
        <div className="pt-20 pb-12 container flex flex-col gap-8 items-center">
            <Heading text="Our" heighlight="Mission" className="mb-6" />

            <div className="relative w-full">
                <svg viewBox="0 0 1000 300" preserveAspectRatio="none" className="absolute inset-0 w-full h-full" aria-hidden>
                    <path d="M0,60 Q120,0 240,20 T480,35 T720,25 T880,50 Q940,70 1000,80 L1000,300 L0,300 Z" fill="#ecfdf5" />
                </svg>

                <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8 px-6 md:px-12 py-10">
                    <div className="w-full lg:w-1/2 flex justify-center">
                        <img src="https://factsscan.com/wp-content/uploads/2025/09/mission-illustration.png" alt="mission" className="w-56 md:w-96 object-contain" />
                    </div>

                    <div className="w-full lg:w-1/2">
                        <p className="text-gray-700 leading-relaxed text-lg">
                            Our mission is to transform food transparency by providing a
                            reliable and easy-to-use app to scan products for harmful
                            ingredients. We aim to establish FactsScan as the most trusted
                            food scanner app that empowers consumers to scan food ingredients,
                            analyze products, and make informed decisions. We are committed
                            to helping every Indian choose safer and healthier food options
                            with just a barcode scan.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Mission;
