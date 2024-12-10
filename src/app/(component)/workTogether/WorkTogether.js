import naveed from "@/app/public/imag/naveed.png";
import bot from "@/app/public/imag/bot.png";
import topLeft from "@/app/public/imag/top-left.png";
import bottomRight from "@/app/public/imag/bottom-right.png";
import Image from "next/image";
import Link from "next/link";


const WorkTogether = () => {
    return (
        <>
            <div className="flex flex-wrap justify-center gap-6 mx-4 sm:mx-8 md:mx-14 mt-12 sm:mt-16 md:mt-24">
                {/* First Card */}
                <div className="flex flex-col sm:flex-row items-center bg-white py-4 px-4 sm:py-2 sm:px-2 rounded-xl w-full sm:w-[90%] md:w-[46%] shadow-lg border border-gray-200">
                    {/* Image Section */}
                    <div className="relative sm:mr-6 mb-4 sm:mb-0">
                        <Image
                            src={naveed}
                            alt="Profile"
                            className="rounded-lg object-cover w-full sm:w-[300px] md:w-[500px] h-[200px] sm:h-[250px]"
                        />
                    </div>

                    {/* Text Section */}
                    <div className="flex flex-col rounded-xl p-4 border border-gray-200 justify-center">
                        <div className="text-lime-400 py-2">
                            <Image src={bot} alt=".." className="w-[40px] sm:w-[50px]" />
                        </div>
                        <p className="text-gray-600 text-base sm:text-lg italic mb-4 text-left">
                            The technological revolution is changing aspects of our lives, and the fabric of society itself.
                        </p>
                        <h3 className="text-lg sm:text-xl font-semibold text-gray-800 text-left">Nawed Samwar</h3>
                        <p className="text-sm sm:text-base text-gray-500 text-left">CEO at TechNest</p>
                    </div>
                </div>

                {/* Second Card */}
                <div className="flex flex-col sm:flex-row items-center bg-white py-4 px-4 sm:py-2 sm:px-2 rounded-xl w-full sm:w-[90%] md:w-[46%] shadow-lg border border-gray-200">
                    {/* Image Section */}
                    <div className="relative sm:mr-6 mb-4 sm:mb-0">
                        <Image
                            src={naveed}
                            alt="Profile"
                            className="rounded-lg object-cover w-full sm:w-[300px] md:w-[500px] h-[200px] sm:h-[250px]"
                        />
                    </div>

                    {/* Text Section */}
                    <div className="flex flex-col rounded-xl p-4 border border-gray-200 justify-center">
                        <div className="text-lime-400 py-2">
                            <Image src={bot} alt=".." className="w-[40px] sm:w-[50px]" />
                        </div>
                        <p className="text-gray-600 text-base sm:text-lg italic mb-4 text-left">
                            The technological revolution is changing aspects of our lives, and the fabric of society itself.
                        </p>
                        <h3 className="text-lg sm:text-xl font-semibold text-gray-800 text-left">Nawed Samwar</h3>
                        <p className="text-sm sm:text-base text-gray-500 text-left">CEO at TechNest</p>
                    </div>
                </div>
            </div>

            {/* bottom  section//////////////////////////////////////////////////////////////  */}

            <div className="relative -z-20 flex items-center mt-24 justify-center h-80 bg-gray-100 rounded-lg p-8 mx-[10%] md:mx-[15%] shadow-md overflow-hidden">
                {/* Top Left Decoration */}
                <div className="absolute top-[-20px] left-[-20px]">
                    <Image
                        src={topLeft}
                        alt="Top Left Decoration"
                        width={120}
                        height={120}
                        className="rounded-full md:block hidden"
                    />
                </div>

                {/* Bottom Right Decoration */}
                <div className="absolute bottom-[-40px] right-[-40px]">
                    <Image
                        src={bottomRight}
                        alt="Bottom Right Decoration"
                        width={150}
                        height={150}
                        className="rounded-full md:block hidden"
                    />
                </div>

                {/* Content */}
                <div className="text-center">
                    <h2 className="text-4xl font-bold text-gray-800">Let{"'"}s Work Together</h2>
                    <p className="text-gray-600 text-xl px-[6%] py-4 mt-4">
                        The technological revolution is changing aspects of our lives, and the
                        fabric of society itself. It{"'"}s also changing the way we learn and what we
                        learn.
                    </p>
                        <button className="mt-6 px-6 py-2 bg-[#383838] text-white font-medium rounded shadow hover:bg-[#404040]">
                    <Link href="/Contact">
                            <p className="cursor-pointer ">
                                Contact Me
                            </p>
                    </Link>
                        </button>

                </div>
            </div>



        </>
    );
};

export default WorkTogether;
