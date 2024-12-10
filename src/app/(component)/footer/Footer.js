import { FaGithub, FaFacebook } from "react-icons/fa";
import { TiSocialLinkedin } from "react-icons/ti";
import footer from "@/app/public/imag/footer.png"

const Footer = () => {
  return (
    <div
      className="relative bg-gray-100 text-center  mt-24 py-28"
      style={{
        backgroundImage: `url(${footer.src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {/* Social Media Icons */}
      <div className="flex justify-center gap-4 mb-4">
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#383838] p-3 rounded-lg hover:bg-[#4b4b4b] transition"
        >
          <TiSocialLinkedin className="text-white text-2xl " />
        </a>
        <a
          href="https://www.github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#383838] p-3 rounded-lg hover:bg-[#4b4b4b] transition"
        >
          <FaGithub className="text-white text-2xl" />
        </a>
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#383838] p-3 rounded-lg hover:bg-[#4b4b4b] transition"
        >
          <FaFacebook className="text-white text-2xl" />
        </a>
      </div>

      {/* Footer Text */}
      <p className="text-gray-600 text-md">
      © 2024 Muhammad Ahsan - Portfolio. All rights reserved.      </p>
    </div>
  );
};

export default Footer;
