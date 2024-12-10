import React from 'react'
import { FaGithub, FaFacebook, } from "react-icons/fa";
import { TiSocialLinkedin } from "react-icons/ti";
import Navbar from "@/app/(component)/navbar/Navbar";
import bg from "@/app/public/imag/BGLines.png"
import Link from 'next/link';
const Header = () => {
    return (


        <div className="min-h-screen  pt-[19px] bg-[#383838]  text-white">
            {/* Navbar */}
            
            <Navbar/>

            {/* Main Header Section */}
            <main className="text-center ">
                <div className="flex items-center pt-14  mb-5 justify-center ">

                    <div className="px-4 py-1 rounded-full bg-[#4c4c4c] text- text-sm uppercase font-sans">
                        ____ Introduction
                    </div>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                    Hello, I{"'"}m <br /> <span className="text-[#B8FF32]">Muhammad Ahsan</span>
                </h1>
                <p className="text-lg md:text-lg px-5 text-gray-300 max-w-3xl mx-auto mb-8">
                    Since starting my career as a developer nearly 3 years ago, I{"'"}ve worked with dynamic teams at my company to build robust MERN stack applications and intelligent chatbots, delivering innovative digital solutions to meet diverse client needs.
                </p>

            </main>
            <div
                className="relative h-64 -mt-16   bg-no-repeat bg-cover bg-center text-white"
                style={{
                    backgroundImage: `url(${bg.src})`,
                }}
            >
                <div className='pt-14'>

              
                <div className="space-x-4  flex justify-center">
                    <Link href="/Contact">
                    <button className="bg-[#B8FF32] text-black font-semibold px-6 py-3 rounded hover:bg-[#b7ff32da]">
                        Contact Me
                    </button>
                    </Link>
                    <Link href="/Portfolio">
                    <button className="bg-[white] text-black font-semibold px-6 py-3 rounded hover:bg-[#B8FF32]">
                        View Portfolio
                    </button>
                    </Link>
                </div>

                {/* Social Links */}
                <div className="text-center mt-6">
                    <p className="text-lg font-semibold">My Social Links</p>
                    <div className="flex justify-center space-x-6 text-3xl mt-6">
                        {/* LinkedIn */}
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noreferrer"
                            className="bg-[#B8FF32] w-11 h-11 flex items-center justify-center rounded-lg hover:bg-[#b7ff32da]"
                        >
                            <TiSocialLinkedin className="text-black" />
                        </a>

                        {/* GitHub */}
                        <a
                            href="https://github.com"
                            target="_blank"
                            rel="noreferrer"
                            className="bg-[#B8FF32] w-11 h-11 flex items-center justify-center rounded-lg hover:bg-[#b7ff32da]"
                        >
                            <FaGithub className="text-black" />
                        </a>

                        {/* Facebook */}
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noreferrer"
                            className="bg-[#B8FF32] w-11 h-11 flex items-center justify-center rounded-lg hover:bg-[#b7ff32da]"
                        >
                            <FaFacebook className="text-black" />
                        </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default Header
