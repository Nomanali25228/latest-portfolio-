import React from "react";
// import { FaCode, FaMobileAlt, FaBrain, FaCogs } from "react-icons/fa";
import blockgame from "@/app/public/imag/block-game.png"
import blockchain from "@/app/public/imag/blockchain-04.png"
import magic from "@/app/public/imag/magic-wand-01.png"
import wallet from "@/app/public/imag/wallet-done-01.png"
import Image from "next/image";


const Services = () => {
    return (
        <section className="bg-white py-16 text-center">
            {/* Header Section */}
            <div className="mb-12">
                <div className="flex justify-center items-center space-x-2 mb-2">
                    <div className="flex items-center   mb-5 justify-center ">

                        <div className="px-4 py-1 border border-[#d5d8d2] rounded-full bg-[#e7e9e6] text- text-sm uppercase font-sans">
                            ____ Services
                            </div>
                    </div>
                </div>
                <h2 className="text-4xl font-bold text-gray-800 mb-4">What I Offer</h2>
                <p className="text-gray-600 px-9 max-w-5xl mx-auto">
                    The technological revolution is changing the aspect of our lives and
                    the fabric of society itself. It{"'"}s also changing the way we learn and
                    what we learn. Factual knowledge is less prized when everything you
                    ever need to know can be found on your phone. There{"'"}s no imperative
                    to be an expert at doing everything when you can.
                </p>
            </div>

            {/* Services Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto px-8">
                {/* Website Development */}
                <div className="border-2 hover:border-[#DBFF99] rounded-lg py-10 px-1 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className=" bg-[#DBFF99] p-4 rounded-lg inline-block mb-4">
                        <Image src={wallet} alt="wallet" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                        Website Development
                    </h3>
                    <p className="text-gray-600 text-sm">
                        The technological revolution is changing aspect.
                    </p>
                </div>

                {/* Mobile App Development */}
                <div className="border-2 hover:border-[#DBFF99] rounded-lg py-10 px-1 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className=" bg-[#DBFF99] p-4 rounded-lg inline-block mb-4">
                        <Image src={blockchain} alt="blockchain" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                        Mobile App Development
                    </h3>
                    <p className="text-gray-600 text-sm">
                        The technological revolution is changing aspect.
                    </p>
                </div>

                {/* AI Based Solution */}
                <div className="border-2 hover:border-[#DBFF99] rounded-lg py-10 px-1 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className=" bg-[#DBFF99] p-4 rounded-lg inline-block mb-4">
                        <Image src={magic} alt="magic" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                        AI Based Solution
                    </h3>
                    <p className="text-gray-600 text-sm">
                        The technological revolution is changing aspect.
                    </p>
                </div>

                {/* SaaS Products */}
                <div className="border-2 hover:border-[#DBFF99] rounded-lg py-10 px-1 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className=" bg-[#DBFF99] p-4 rounded-lg inline-block mb-4">
                        <Image src={blockgame} alt="blockgame" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                        SaaS Products
                    </h3>
                    <p className="text-gray-600 text-sm">
                        The technological revolution is changing aspect.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Services;
