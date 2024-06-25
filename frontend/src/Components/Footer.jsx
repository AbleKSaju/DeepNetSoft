import {
  Facebook,
  Instagram,
  Mail,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <>
    <div class="flex flex-wrap justify-center gap-10 oswald-font">
      <div className="h-32">
        <div class="flex rounded-lg border border-white px-12 flex-col p-4">
          <div class="flex items-center justify-center mb-3">
            <h2 class="text-blue-500 text-lg font-medium">Connect with Us</h2>
          </div>
          <div class="flex flex-col justify-between gap-2">
            <p class="flex items-center leading-relaxed text-base text-white dark:text-gray-300">
              <Phone size={20} /> &nbsp; +1 470-788-8255
            </p>
            <p class="flex items-center leading-relaxed text-base text-white dark:text-gray-300">
              <Mail size={20} /> &nbsp; email@42barandgrill.com
            </p>
          </div>
        </div>
      </div>
      <div className="h-32">
        <div class="flex relative rounded-lg border border-white px-12 flex-col p-4">
          <img
            src="/images/Logo.png"
            alt=""
            className="h-14 w-14 sm:h-16 sm:w-16 absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          />
          <div class="flex items-center justify-center mt-8">
            <h2 class="text-white dark:text-white text-3xl font-medium">
              <span className="text-blue-500">DEEP</span>
              &nbsp;
              <span>NET</span>
              &nbsp;
              <span className="text-gray-500">SOFT</span>
            </h2>
          </div>
          <div class="flex flex-col justify-between gap-2">
            <p class="flex self-center mt-6 gap-3 leading-relaxed text-base text-white dark:text-gray-300">
              <Facebook size={10} />
              <Twitter size={10} />
              <Youtube size={10} />
              <Instagram size={10} />
            </p>
          </div>
        </div>
      </div>
      <div className="h-40">
        <div class="flex rounded-lg border border-white px-12 flex-col p-4 ">
          <div class="flex items-center justify-center mb-3">
            <h2 class="text-blue-500 text-lg font-medium">
              Find us
            </h2>
          </div>
          <div class="flex flex-col justify-between gap-2">
            <p class="flex items-center leading-relaxed text-base text-white dark:text-gray-300 pb-3">
            327 Memorial Dr SE, Atlanta, 
            <br />
            GA 30312, USA
            </p>

          </div>
        </div>
      </div>
    </div>
    <div className="sm:flex justify-around items-center bg-[#171717] p-3">
    <p className="text-start text-xs text-[#857878] flex justify-center">© 2024 42 Bar & Grill. Developed by Deepnetsoft Solutions.</p>
    <p className="text-start text-xs text-[#857878] flex justify-center">Terms & Conditions &nbsp; Privacy Policy</p>
    </div>
    </>
  );
};

export default Footer;
