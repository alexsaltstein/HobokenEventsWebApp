/** @jsxImportSource @emotion/react */
import "twin.macro";
import React from "react";
import { SocialIcon } from "react-social-icons";
import { WordmarkLogo } from "../icons/Icons";

export default function Footer() {
  return (
    <>
      <footer className=" w-full p-4 border-t-2 border-button-hover-blue shadow md:px-6 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a href="/" className="flex items-center mb-4 sm:mb-0">
            <WordmarkLogo tw="w-[200px] self-center whitespace-nowrap fill-button-blue " />
          </a>
          <ul className="items-center mb-6 text-md text-button-blue sm:mb-0 ">
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
          </ul>
        </div>
        <hr className="my-4 border-button-hover-blue  sm:mx-auto lg:my-4" />
        <div className="flex space-y-2 my-4 md:items-center flex-col md:flex-row md:justify-between">
          <div className="flex-col">
            <h4 className="font-bold text-button-blue text-lg">
              Entertainment
            </h4>
            <a href="/powerhour" className="text-button-blue  hover:underline">
              <p>Power hour</p>
            </a>
          </div>
          <div className="flex gap-x-2">
            <SocialIcon
              target="_blank"
              rel="noopener noreferrer"
              style={{ height: "35px", width: "35px" }}
              className="bg-white rounded-full"
              url="https://discord.gg/vM2cA32Seg"
            />
            <SocialIcon
              target="_blank"
              rel="noopener noreferrer"
              style={{ height: "35px", width: "35px" }}
              className="bg-white rounded-full"
              url="https://twitter.com/HudsonHapps"
            />
            <SocialIcon
              target="_blank"
              rel="noopener noreferrer"
              style={{ height: "35px", width: "35px" }}
              className="bg-white rounded-full"
              url="https://www.instagram.com/hudsonhappsapp/"
            />
          </div>
        </div>
        <span className="block text-sm text-gray-700 sm:text-center ">
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
