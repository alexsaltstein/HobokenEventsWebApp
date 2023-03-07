/** @jsxImportSource @emotion/react */
import "twin.macro";
import React, { useState } from "react";
import DropdownMenu from "./DropdownMenu";
import { IconLogoWhite, SubmitButton, WordmarkLogo } from "../icons/Icons";
import "./Header.css";
import { useUserState } from "../../utils/userState";
import { Link, useLocation } from "react-router-dom";
import { DonateButton } from "../buyUsABeer/DonateButton";

export default function Header() {
  const location = useLocation();
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
        <div className="absolute w-full top-2 left-8 flex justify-between items-start mx-auto">
          <a href="/" className="flex md:items-center gap-x-2">
            <IconLogoWhite tw="h-8 w-8 md:mb-1 md:mt-0 mt-1.5" />
            <WordmarkLogo tw="md:w-[200px] w-[150px] self-center whitespace-nowrap fill-white" />
          </a>
          <button
            type="button"
            className=" p-2 ml-3 mr-10 text-sm outline-none text-gray-500 rounded-lg lg:hidden focus:outline-none focus:ring-2 focus:ring-gray-200"
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
            className="hidden w-full lg:block md:w-auto md:fixed md:right-6"
            id="navbar-default"
          >
            <ul className="flex flex-col ml-auto mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-button-blue">
              <li>
                <DonateButton
                  className={`block py-2 pr-4 pl-3 mt-${
                    authed ? 3 : 2
                  } text-white hover:text-gray-200 md:border-0 md:p-0`}
                />
              </li>
              <li>
                <a
                  href="/about"
                  className={`block py-2 pr-4 pl-3 mt-${authed ? 3 : 2} ${
                    location.pathname === "/about"
                      ? "underline underline-offset-8"
                      : null
                  } text-white hover:text-gray-200 md:border-0 md:p-0`}
                >
                  <p>About Us</p>
                </a>
              </li>
              {authed ? (
                <li key="moderate">
                  <a
                    href="/admin/moderate/events"
                    className={`block py-2 pr-4 pl-3 mt-${authed ? 3 : 2} ${
                      location.pathname === "/admin/moderate/events"
                        ? "underline underline-offset-8"
                        : null
                    } text-white hover:text-gray-200 md:border-0 md:p-0`}
                  >
                    Moderate
                  </a>
                </li>
              ) : null}
              <li>
                <a
                  href={!authed ? "/admin/login" : "/admin/logout"}
                  className={`block py-2 pr-4 pl-3 mt-${authed ? 3 : 2} ${
                    location.pathname === "/admin/logout" ||
                    location.pathname === "/admin/login"
                      ? "underline underline-offset-8"
                      : null
                  } text-white hover:text-gray-200 md:border-0 md:p-0`}
                >
                  <p>{!authed ? "Sign In" : "Sign Out"}</p>
                </a>
              </li>
              {!authed ? null : (
                <Link
                  to="/admin/create/events"
                  className="flex py-2 pr-4 pl-3 bg-blue-800 border-gray-200 text-white mr-3 text-sm font-semibold rounded-lg"
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
