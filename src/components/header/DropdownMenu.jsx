import React from "react";
import {
  SubmitButton,
  ContactUsButton,
  SignInButton,
  SignOutButton,
  ModerateIcon,
} from "../icons/Icons";
import "./Header.css";

export default function DropdownMenu({ open, authed }) {
  return (
    <>
      <div className="relative text-left z-20 md:hidden">
        <div
          className={`absolute transition-all duration-500 ${
            open ? "top-0" : "-top-60"
          } left-0 w-full origin-top-left bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex="-1"
          id="menu"
        >
          <div className="py-1" role="none">
            {!authed ? null : (
              <a
                href="/admin/create/events"
                className="text-gray-700 px-4 py-2 text-sm flex hover:bg-gray-100"
                role="menuitem"
                tabIndex="-1"
                id="menu-item-0"
              >
                <SubmitButton params={"mr-2"} />
                <p className="mt-auto mb-auto">What's Happening?</p>
              </a>
            )}
            {authed ? (
              <a
                href="/admin/moderate/events"
                className="text-gray-700 px-4 py-2 text-sm flex hover:bg-gray-100"
                role="menuitem"
                tabIndex="-1"
                id="menu-item-1"
              >
                <ModerateIcon params={"mr-2"} />
                <p className="mt-auto mb-auto">Moderate</p>
              </a>
            ) : null}
            <a
              href="/contact"
              className="text-gray-700 px-4 py-2 text-sm flex hover:bg-gray-100"
              role="menuitem"
              tabIndex="-1"
              id="menu-item-0"
            >
              <ContactUsButton params={"mr-2"} />
              <p className="mt-auto mb-auto">Contact Us</p>
            </a>
            <a
              href={!authed ? "/admin/login" : "/admin/logout"}
              className="text-gray-700 w-full px-4 py-2 text-left text-sm flex hover:bg-gray-100"
              role="menuitem"
              tabIndex="-1"
              id="menu-item-3"
            >
              {!authed ? (
                <SignInButton params={"mr-2"} />
              ) : (
                <SignOutButton params={"mr-2"} />
              )}
              <p>{!authed ? "Sign In" : "Sign Out"}</p>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
