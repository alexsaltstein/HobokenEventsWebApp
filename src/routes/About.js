import React from "react";
import "twin.macro";
/** @jsxImportSource @emotion/react */

export const About = () => {
  return (
    <div className="flex justify-center w-full">
      <div tw="bg-red-400">hi</div>
      <section className="bg-white">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <h2 className="mb-8 text-4xl tracking-tight font-extrabold text-gray-900">
            About
          </h2>
          <div className="grid pt-8 text-left border-t border-gray-200 md:gap-16 md:grid-cols-1">
            <div>
              <div className="flex mb-10 justify-center">
                <picture>
                  <source srcSet="bar.webp" type="image/webp" />
                  <source srcSet="bar.jpg" type="image/jpeg" />
                  <img className="rounded-lg" src="/bar.jpg" alt="banner" />
                </picture>
              </div>
              <div className="mb-10">
                <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900">
                  <svg
                    className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  What is Hudson Happs about?
                </h3>
                <p className="text-gray-500">
                  Are you always checking every website or instagram page for
                  the places around town just to get a cheap drink or meal?
                </p>
                <br />
                <p className="text-gray-500">
                  Living in the Hudson County/NYC area can be expensive,
                  especially in today's economy. So our team was constantly
                  looking for deals so we can still be social but also not break
                  the bank.
                </p>
                <br />
                <p className="text-gray-500">
                  Hudson Happs is about putting all the deals of the local
                  Hudson County and NYC area all in one place so you can spend
                  less time scouring the web and more time spending time with
                  friends or just saving a couple bucks.
                </p>
              </div>
              <div className="mb-10">
                <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900">
                  <svg
                    className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  Who are we?
                </h3>
                <p className="text-gray-500">
                  We're a group of friends who graduated from Stevens Institute
                  of Technology in 2020/2021, fell in love with the Hudson
                  County area and journeying into the city so we stayed local to
                  Hoboken and Jersey City.
                </p>
              </div>
              <div className="mb-10">
                <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900">
                  <svg
                    className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  How can I contribute?
                </h3>
                <p className="text-gray-500">
                  During our beta phase we are only giving the option to
                  contribute to a select group of people.
                </p>
                <br />

                <p className="text-gray-500">
                  If you are selected to be part of this group you can login to
                  your account and click "What's happening?" to add a deal to a
                  location.
                </p>
              </div>
              <div>
                <div className="mb-10">
                  <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900">
                    <svg
                      className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    How do I suggest a feature or report a bug?
                  </h3>
                  <p className="text-gray-500">
                    We are always trying to make this site more reliable, user
                    friendly, and accurate so if you have an idea or want to
                    report a bug feel free to&nbsp;
                    <a
                      href="mailto:bsoong@hudsonhapps.com?subject=[Hudson Happs]:"
                      className="hover:underline md:mr-6 text-button-blue"
                    >
                      Contact Us,
                    </a>
                    &nbsp;click Contact Us in the footer, or email us at
                    bsoong@hudsonhapps.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
