// components/ProjectCard.js
import Image from 'next/image';
import image1 from "@/app/public/imag/Image1.png"
import image1Logo from "@/app/public/imag/Image1Logo.png"
import image2 from "@/app/public/imag/image2.png"
import image2Logo from "@/app/public/imag/image2Logo.png"
import image3 from "@/app/public/imag/image3.png"
import image3Logo from "@/app/public/imag/image3Logo.png"

const Projects = () => {
    return (
        <>
            {/* start project 1//////////////////////////////////////////////////////// */}
            <div className="flex flex-col md:flex-row items-center md:items-start p-6 md:p-12 mx-4 lg:mx-16 rounded-xl">
                {/* Left Section */}
                <div className="flex-1 text-left space-y-4">
                    <div className="flex items-center justify-start mb-5">
                        <div className="px-2 py-1 border border-[#d5d8d2] rounded-full bg-[#e7e9e6] text-xs md:text-sm uppercase font-sans">
                            ____ Project 1
                        </div>
                    </div>
                    <div>
                        <Image src={image1Logo} alt="logo" />
                    </div>
                    <h3 className="text-xl md:text-2xl lg:text-3xl pr-0 lg:pr-8 font-bold">
                        Building a 5-star Fitness training mobile app
                    </h3>
                    <p className="text-gray-600 pr-0 md:pr-6 lg:pr-10 text-sm md:text-base">
                        The technological revolution is changing aspects of our lives, and the fabric of society itself.
                        It{"'"}s also changing the way we learn and what we learn. Personal knowledge is less prized when
                        everything you ever need to know can be found on your phone. There{"’"}s no imperative to be an expert
                        at doing everything when you can.
                    </p>
                    <div className="hidden md:block mt-4 md:mt-6 w-full justify-center lg:justify-start">
                        <button className="px-4 py-2 bg-black text-white rounded-lg shadow-md hover:bg-gray-800">
                            Show more
                        </button>
                    </div>
                </div>

                {/* Right Section */}
                <div className="flex-1 flex flex-col items-center md:items-start mt-8 md:mt-0 md:ml-8">
                    <div className="relative flex items-center justify-center">
                        <Image
                            src={image1} // Replace with your image path
                            alt="Mobile Mockup"
                            width={450}
                            height={400}
                            className="rounded-lg w-full md:w-auto"
                        />
                    </div>
                    {/* Button Section */}
                    <div className="block md:hidden mt-4 justify-center">
                        <button className="px-4 py-2 bg-black text-white rounded-lg shadow-md hover:bg-gray-800">
                            Show more
                        </button>
                    </div>
                </div>
            </div>
            {/* end project 1//////////////////////////////////////////////////////// */}


            {/* start project 2//////////////////////////////////////////////////////// */}
            <div className="flex flex-col md:flex-row items-center md:items-start p-6 md:p-12 mx-4 lg:mx-7 rounded-xl">
                {/* Left Section */}
                <div className="flex-1 mt-8 md:mt-0 -ml-0 lg:-ml-8">
                    
                    <div className="relative flex items-center justify-center">
                        <Image
                            src={image2} // Replace with your image path
                            alt="Mobile Mockup"
                            width={450}
                            height={600}
                            className="rounded-lg w-full md:w-auto"
                        />
                    </div>
                </div>
                {/* Right Section */}
                <div className="flex-1 text-left space-y-4 mt-8 md:mt-0">
                    <div className="flex items-center justify-start mb-5">
                        <div className="px-2 py-1 border border-[#d5d8d2] rounded-full bg-[#e7e9e6] text-xs md:text-sm uppercase font-sans">
                            ____ Project 2
                        </div>
                    </div>
                    <div>
                        <Image src={image2Logo} alt="logo" />
                    </div>
                    <h3 className="text-xl md:text-3xl lg:text-4xl pr-0 lg:pr-20 font-bold">
                        Building a 5-star A.I. based Real Estate app
                    </h3>
                    <p className="text-gray-600 pr-0 md:pr-12 lg:pr-24 text-sm md:text-base">
                        The technological revolution is changing aspects of our lives, and the fabric of society itself.
                        It{"'"}s also changing the way we learn and what we learn. Factual knowledge is less prized
                        when everything you ever need to know can be found on your phone. There{"'"}s no imperative
                        to be an expert at doing everything when you can.
                    </p>
                    <div className="mt-4 w-full flex justify-center md:justify-start">
                        <button className="px-4 py-2 bg-black text-white rounded-lg shadow-md hover:bg-gray-800">
                            Show more
                        </button>
                    </div>
                </div>
            </div>
            {/* end project 2//////////////////////////////////////////////////////// */}


            {/* start project 3//////////////////////////////////////////////////////// */}
            <div className="flex flex-col md:flex-row items-center md:items-start p-6 md:p-12 mx-4 lg:mx-16 rounded-xl">
                {/* Left Section */}
                <div className="flex-1 text-left space-y-4">
                    <div className="flex items-center justify-start mb-5">
                        <div className="px-2 py-1 border border-[#d5d8d2] rounded-full bg-[#e7e9e6] text-xs md:text-sm uppercase font-sans">
                            ____ Project 3
                        </div>
                    </div>
                    <div>
                        <Image src={image3Logo} alt="logo" />
                    </div>
                    <h3 className="text-xl md:text-3xl lg:text-4xl pr-0 md:pr-6 lg:pr-14 font-bold">
                        Building a 5-star Fitness training mobile app
                    </h3>
                    <p className="text-gray-600 pr-0 md:pr-6 lg:pr-14 text-sm md:text-base">
                        The technological revolution is changing aspects of our lives, and the fabric of society itself.
                        It{"'"}s also changing the way we learn and what we learn. Personal knowledge is less prized when
                        everything you ever need to know can be found on your phone. There{"’"}s no imperative to be an expert
                        at doing everything when you can.
                    </p>
                    <div className="hidden md:block mt-4 md:mt-6 w-full justify-center lg:justify-start">
                        <button className="px-4 py-2 bg-black text-white rounded-lg shadow-md hover:bg-gray-800">
                            Show more
                        </button>
                    </div>
                </div>

                {/* Right Section */}
                <div className="flex-1 mt-8 md:mt-0 md:ml-8">
                    <div className="relative flex items-center justify-center">
                        <Image
                            src={image3} // Replace with your image path
                            alt="Mobile Mockup"
                            width={450}
                            height={600}
                            className="rounded-lg w-full md:w-auto"
                        />
                    </div>
                    {/* Button Section */}
                    <div className="block md:hidden mt-4 flex justify-center">
                        <button className="px-4 py-2 bg-black text-white rounded-lg shadow-md hover:bg-gray-800">
                            Show more
                        </button>
                    </div>
                </div>
            </div>
            {/* end project 3//////////////////////////////////////////////////////// */}

            <div className="mt-8 flex justify-center items-center">
                <button className="bg-[#B8FF32] text-black px-8 py-3 font-semibold rounded-lg hover:bg-[#b7ff32e0]">
                View All
                </button>
            </div>
        </>
    );
};

export default Projects;
