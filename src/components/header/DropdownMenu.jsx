/** @jsxImportSource @emotion/react */
import "twin.macro";
import React from "react";
import {
  SubmitButton,
  AboutButton,
  SignInButton,
  SignOutButton,
  ModerateIcon,
} from "../icons/Icons";
import "./Header.css";
import { SocialIcon } from "react-social-icons";

export default function DropdownMenu({ open, authed }) {
  return (
    <>
      <div className="relative text-left md:hidden">
        <div
          className={`fixed transition-all duration-500 ${
            open ? "top-12" : "-top-80"
          } left-0 w-full origin-top-left bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex="-1"
          id="menu"
        >
          <div className="py-2" role="none">
            {!authed ? null : (
              <a
                href="/admin/create/events"
                className="text-gray-700 px-4 py-3 text-sm flex border-b hover:bg-gray-100"
                role="menuitem"
                tabIndex="-1"
                id="menu-item-0"
              >
                <SubmitButton tw="mr-2" />
                <p className="mt-auto mb-auto">What's Happening?</p>
              </a>
            )}
            {authed ? (
              <a
                href="/admin/moderate/events"
                className="text-gray-700 px-4 py-3 text-sm flex border-b hover:bg-gray-100"
                role="menuitem"
                tabIndex="-1"
                id="menu-item-1"
              >
                <ModerateIcon tw="mr-2" />
                <p className="mt-auto mb-auto">Moderate</p>
              </a>
            ) : null}
            <a
              href="/about"
              className="text-gray-700 px-4 py-3 text-sm flex border-b hover:bg-gray-100"
              role="menuitem"
              tabIndex="-1"
              id="menu-item-2"
            >
              <AboutButton tw="mr-2" />
              <p className="mt-auto mb-auto">About Us</p>
            </a>
            <a
              href="https://www.instagram.com/hudson_happs/"
              className="text-gray-700 px-4 py-3 text-sm flex border-b hover:bg-gray-100"
              role="menuitem"
              tabIndex="-1"
              id="menu-item-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SocialIcon
                target="_blank"
                rel="noopener noreferrer"
                style={{ height: "25px", width: "25px" }}
                className="bg-white rounded-full mr-2"
                url="https://www.instagram.com/hudson_happs/"
              />
              <p className="mt-auto mb-auto">Instagram</p>
            </a>
            <a
              href="https://twitter.com/HudsonHapps"
              className="text-gray-700 px-4 py-3 text-sm flex border-b hover:bg-gray-100"
              role="menuitem"
              tabIndex="-1"
              id="menu-item-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SocialIcon
                target="_blank"
                rel="noopener noreferrer"
                style={{ height: "25px", width: "25px" }}
                className="bg-white rounded-full mr-2"
                url="https://twitter.com/HudsonHapps"
              />
              <p className="mt-auto mb-auto">Twitter</p>
            </a>
            {/* Add this back once we have email service
            <a
              href="/contact"
              className="text-gray-700 px-4 py-2 text-sm flex hover:bg-gray-100"
              role="menuitem"
              tabIndex="-1"
              id="menu-item-3"
            >
              <ContactUsButton tw="mr-2" />
              <p className="mt-auto mb-auto">Contact Us</p>
            </a>
            */}
            <a
              href={!authed ? "/admin/login" : "/admin/logout"}
              className="text-gray-700 w-full px-4 py-3 text-left text-sm flex hover:bg-gray-100"
              role="menuitem"
              tabIndex="-1"
              id="menu-item-3"
            >
              {!authed ? (
                <SignInButton tw="mr-2" />
              ) : (
                <SignOutButton tw="mr-2" />
              )}
              <p>{!authed ? "Sign In" : "Sign Out"}</p>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
