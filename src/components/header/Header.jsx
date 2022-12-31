/** @jsxImportSource @emotion/react */
import "twin.macro";
import React, { useState } from "react";
import DropdownMenu from "./DropdownMenu";
import { SubmitButton } from "../icons/Icons";
import "./Header.css";
import { useUserState } from "../../utils/userState";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation()
  console.log(location.pathname)
  const [open, setOpen] = useState(false);
  const [user] = useUserState();

  const [authed, setAuthed] = React.useState(!!user);

  React.useEffect(() => {
    setAuthed(!!user);
  }, [user]);

  function openMenu() {
    setOpen(!open);
  }

  return (
    <>
      <nav className="flex top-0 left-0 h-14 w-screen bg-button-blue border-gray-200 py-2.5 z-30 shadow fixed">
        <div className="absolute top-0 left-8 container flex flex-wrap justify-between items-center mx-auto md:absolute md:top-auto">
          <a href="/" className="flex items-center">
            {/* INSERT LOGO HERE */}
            <span className="ml-2 my-auto self-center text-xl font-semibold whitespace-nowrap text-white">
              Hudson Happs
            </span>
          </a>
          <button
            type="button"
            className="inline-flex items-center p-2 ml-3 mr-3 mt-2 text-sm outline-none  text-gray-500 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-default"
            aria-expanded="false"
            aria-label="hamburgerMenu"
            onClick={openMenu}
            onAnimationEnd={() => setOpen(false)}
          >
            {open ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="white"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="white"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            )}
          </button>
          <div
            className="hidden w-full md:block md:w-auto md:fixed md:right-10"
            id="navbar-default"
          >
            <ul className="flex flex-col ml-auto mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-button-blue">
              <li>
                <a
                  href="/about"
                  className={`block py-2 pr-4 under pl-3 mt-${
                    authed ? 4 : 2
                  } ${location.pathname === '/about' ? 'underline underline-offset-8' : null } text-white hover:text-gray-200 md:border-0 md:p-0`}
                >
                  <p>About Us</p>
                </a>
              </li>
              {authed ? (
                <li key="moderate">
                  <a
                    href="/admin/moderate/events"
                    className={`block py-2 pr-4 pl-3 mt-${
                      authed ? 4 : 2
                    } ${location.pathname === '/admin/moderate/events' ? 'underline underline-offset-8' : null } text-white hover:text-gray-200 md:border-0 md:p-0`}
                  >
                    Moderate
                  </a>
                </li>
              ) : null}
              <li>
                <a
                  href={!authed ? "/admin/login" : "/admin/logout"}
                  className={`block py-2 pr-4 pl-3 mt-${
                    authed ? 4 : 2
                  } ${location.pathname === '/admin/logout' || location.pathname === '/admin/login' ? 'underline underline-offset-8' : null } text-white hover:text-gray-200 md:border-0 md:p-0`}
                >
                  <p>{!authed ? "Sign In" : "Sign Out"}</p>
                </a>
              </li>
              {!authed ? null : (
                <Link
                  to="/admin/create/events"
                  className="flex py-2 pr-4 pl-3 bg-blue-800 border-gray-200 text-white mt-2 mr-3 text-sm font-semibold rounded-lg"
                >
                  <SubmitButton tw="mr-2" />
                  <p className="m-auto">What's Happening?</p>
                </Link>
              )}
            </ul>
          </div>
        </div>
      </nav>
      <div className="fixed md:w-1/2 z-20">
        <DropdownMenu open={open} authed={authed} />
      </div>
    </>
  );
}
