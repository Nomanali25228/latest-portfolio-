"use client"
// components/ProjectCard.js
import Image from 'next/image';
import image1 from "@/app/public/imag/Image1.png"
import image1Logo from "@/app/public/imag/Image1Logo.png"
import image2 from "@/app/public/imag/image2.png"
import image2Logo from "@/app/public/imag/image2Logo.png"
import image3 from "@/app/public/imag/image3.png"
import image3Logo from "@/app/public/imag/image3Logo.png"
import image4 from "@/app/public/imag/image4.png"
import image4Logo from "@/app/public/imag/image4Logo.png"
import image5 from "@/app/public/imag/image5.png"
import image5Logo from "@/app/public/imag/image5Logo.png"
import image6 from "@/app/public/imag/image6.png"
import image6Logo from "@/app/public/imag/image6Logo.png"
import image7 from "@/app/public/imag/image7.png"
import image7Logo from "@/app/public/imag/image7Logo.png"
import { useState } from 'react';
import Footer from '../footer/Footer';

const Projectstwo = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleToggle = () => {
      setIsExpanded(!isExpanded);
    };
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
                        <button className="px-4 py-2  bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition">
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
                        <button className="px-4 py-2  bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition">
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
                        <button className="px-4 py-2  bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition">
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
                        <button className="px-4 py-2  bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition">
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
                        <button className="px-4 py-2  bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition">
                            Show more
                        </button>
                    </div>
                </div>
            </div>
            {/* end project 3//////////////////////////////////////////////////////// */}



            {/* start project 4//////////////////////////////////////////////////////// */}
            <div className="flex flex-col md:flex-row items-center md:items-start p-6 md:p-12 mx-4 lg:mx-7 rounded-xl">
                {/* Left Section */}
                <div className="flex-1 mt-8 md:mt-0 -ml-0 lg:-ml-8">

                    <div className="relative flex items-center justify-center">
                        <Image
                            src={image4} // Replace with your image path
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
                            ____ Project 4
                        </div>
                    </div>
                    <div>
                        <Image src={image4Logo} alt="logo" />
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
                        <button className="px-4 py-2  bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition">
                            Show more
                        </button>
                    </div>
                </div>
            </div>
            {/* end project 4//////////////////////////////////////////////////////// */}


{/* text/////////////////////////////////////////////////////////////////////////////////////// */}


<div className="p-6  max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Process</h2>
      <p
        className={`text-gray-700 text-justify ${
          isExpanded ? "line-clamp-none" : "line-clamp-6"
        }`}
      >
        Holistic App Redesign and Advanced Feature Integration We approached
        Torque{"'"}s problem by focusing on enhancing user experience, increasing
        personalization, and integrating robust tracking features. Our process
        included:
        <ol className="list-decimal ml-6">
          <li>
            <strong>User-Centered Design (UCD):</strong> Conducted extensive
            user interviews and surveys to identify pain points and desires in
            the current app experience. Mapped out user journeys to simplify
            navigation and optimize the layout, ensuring users could easily
            find workout programs and nutrition plans tailored to their needs.
          </li>
          <li>
            <strong>Enhanced Personalization Engine:</strong> Developed an
            AI-driven personalization feature that creates customized workout
            routines and meal plans based on user data such as goals, fitness
            level, and dietary preferences. Implemented interactive onboarding
            to help users set clear, measurable goals, which the app uses to
            tailor content dynamically.
          </li>
          <li>
            <strong>Seamless Progress Tracking Integration:</strong> Integrated
            the app with popular wearable fitness devices (e.g., Apple Watch,
            Fitbit), allowing users to automatically track workouts, heart
            rate, and calories burned. Improved the app{"'"}s in-built progress
            tracking with real-time updates and visual dashboards for a more
            intuitive display of milestones and achievements.
          </li>
          <li>
            <strong>Test and Iterate:</strong> Conducted several rounds of beta
            testing to gather real-world feedback from users, ensuring that the
            app redesign met the needs of different user segments.
            Continuously improved features and fixed bugs based on user
            feedback to maintain performance and reliability.
          </li>
        </ol>
      </p>
      <button
        onClick={handleToggle}
        className="mt-4 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition"
      >
        {isExpanded ? "Show less" : "Show more"}
      </button>
    </div>


            {/* start project 5//////////////////////////////////////////////////////// */}
            <div className="flex flex-col md:flex-row items-center md:items-start p-6 md:p-12 mx-4 lg:mx-16 rounded-xl">
                {/* Left Section */}
                <div className="flex-1 text-left space-y-4">
                    <div className="flex items-center justify-start mb-5">
                        <div className="px-2 py-1 border border-[#d5d8d2] rounded-full bg-[#e7e9e6] text-xs md:text-sm uppercase font-sans">
                            ____ Project 5
                        </div>
                    </div>
                    <div>
                        <Image src={image5Logo} alt="logo" />
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
                        <button className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition">
                            Show more
                        </button>
                    </div>
                </div>

                {/* Right Section */}
                <div className="flex-1 mt-8 md:mt-0 md:ml-8">
                    <div className="relative flex items-center justify-center">
                        <Image
                            src={image5} // Replace with your image path
                            alt="Mobile Mockup"
                            width={450}
                            height={600}
                            className="rounded-lg w-full md:w-auto"
                        />
                    </div>
                    {/* Button Section */}
                    <div className="block md:hidden mt-4 flex justify-center">
                        <button className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition">
                            Show more
                        </button>
                    </div>
                </div>
            </div>
            {/* end project 5//////////////////////////////////////////////////////// */}



            {/* start project 6//////////////////////////////////////////////////////// */}
            <div className="flex flex-col md:flex-row items-center md:items-start p-6 md:p-12 mx-4 lg:mx-7 rounded-xl">
                {/* Left Section */}
                <div className="flex-1 mt-8 md:mt-0 -ml-0 lg:-ml-8">

                    <div className="relative flex items-center justify-center">
                        <Image
                            src={image6} // Replace with your image path
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
                            ____ Project 6
                        </div>
                    </div>
                    <div>
                        <Image src={image6Logo} alt="logo" />
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
                        <button className="px-4 py-2  bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition">
                            Show more
                        </button>
                    </div>
                </div>
            </div>
            {/* end project 6//////////////////////////////////////////////////////// */}


            {/* start project 7//////////////////////////////////////////////////////// */}
            <div className="flex flex-col md:flex-row items-center md:items-start p-6 md:p-12 mx-4 lg:mx-16 rounded-xl">
                {/* Left Section */}
                <div className="flex-1 text-left space-y-4">
                    <div className="flex items-center justify-start mb-5">
                        <div className="px-2 py-1 border border-[#d5d8d2] rounded-full bg-[#e7e9e6] text-xs md:text-sm uppercase font-sans">
                            ____ Project 7
                        </div>
                    </div>
                    <div>
                        <Image src={image7Logo} alt="logo" />
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
                        <button className="px-4 py-2  bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition">
                            Show more
                        </button>
                    </div>
                </div>

                {/* Right Section */}
                <div className="flex-1 mt-8 md:mt-0 md:ml-8">
                    <div className="relative flex items-center justify-center">
                        <Image
                            src={image7} // Replace with your image path
                            alt="Mobile Mockup"
                            width={450}
                            height={600}
                            className="rounded-lg w-full md:w-auto"
                        />
                    </div>
                    {/* Button Section */}
                    <div className="block md:hidden mt-4 flex justify-center">
                        <button className="px-4 py-2  bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition">
                            Show more
                        </button>
                    </div>
                </div>
            </div>
            {/* end project 7//////////////////////////////////////////////////////// */}



<Footer/>

        </>
    );
};

export default Projectstwo;
