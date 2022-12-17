import React from "react";
import { SocialIcon } from 'react-social-icons';


export default function Footer() {
  return (
    <>
      <footer className=" w-full p-4 bg-[#51535C] shadow md:px-6 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a href="/" className="flex items-center mb-4 sm:mb-0">
            {/* <img src="" className="mr-3 h-8" alt="Hudson Happs Logo" /> */}
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
              Hudson Happs
            </span>
          </a>
          <ul className="items-center mb-6 text-md text-white sm:mb-0 ">
            <li className="inline">
              <a href="/about" className="mr-4 hover:underline md:mr-6 ">
                About
              </a>
            </li>
            <li className="inline">
              <a
                href="mailto:bsoong@hudsonhapps.com?subject=[Hudson Happs]:"
                className="mr-4 hover:underline md:mr-6"
              >
                Contact Us
              </a>
            </li>
            <li>
              
            </li>
          </ul>
        </div>
        <hr className="border-gray-200 sm:mx-auto lg:my-4" />
        <div className="flex gap-x-2 justify-end mr-9">
          <SocialIcon style={{height: "35px", width: "35px"}} className="bg-white rounded-full" url="https://discord.gg/vM2cA32Seg" />
          <SocialIcon style={{height: "35px", width: "35px"}} className="bg-white rounded-full" url="https://twitter.com/HudsonHapps" />
          <SocialIcon style={{height: "35px", width: "35px"}} className="bg-white rounded-full" url="https://www.instagram.com/hudsonhappsapp/" />
        </div>
        <span className="block text-sm text-gray-300 sm:text-center ">
          © 2022{" "}
          <a href="/" className="hover:underline">
            Hudson Happs™
          </a>
          . All Rights Reserved.
        </span>
      </footer>
    </>
  );
}
