import React from "react";

export const About = () => {
  return (
    <div className="flex justify-center w-full">
      <section className="bg-white">
        <div className="py-8 px-4 mx-auto max-w-screen sm:py-16 lg:px-6 flex">
          <div className="mr-20 justify-center hidden xl:flex">
            <picture>
              <source srcSet="bar.jpg" type="image/jpeg" />
              <img className="rounded-lg" src="/bar.jpg" alt="banner" />
            </picture>
          </div>
          <div className=" max-w-screen-sm">
            <h2 className="mb-2 text-2xl tracking-tight font-bold text-gray-900">
              About Us
            </h2>
            <div className="grid pt-8 text-left border-t border-gray-200 md:gap-16 md:grid-cols-1">
              <div className="justify-center mb-4 xl:hidden">
                <picture>
                  <source srcSet="bar.jpg" type="image/jpeg" />
                  <img className="rounded-lg" src="/bar.jpg" alt="banner" />
                </picture>
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
                    What is Hudson Happs about?
                  </h3>
                  <p className="text-gray-500">
                  HudsonHapps wants to bring friends and community back together. 
                  </p>
                  <br />
                  <p className="text-gray-500">
                  Living in the Hudson County/NYC area can be expensive, especially in today's economy. So
                  our team started looking for deals so we can still be social and not break the bank.
                  </p>
                  <br />
                  <p className="text-gray-500">
                    Hudson Happs is about putting all the deals of the local
                    Hudson County and NYC area all in one place so you can spend
                    less time scouring the web and more time spending time with
                    friends or just saving a couple bucks!
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
                    Software Engineers from Stevens Institute of Technology (20/21) looking to improve Hudson County’s communal painpoints with tech.
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
                    How can I help?
                  </h3>
                  <p className="text-gray-500">
                    FEEDBACK! Reach out via our email at <a href="mailto:support@hudsonhapps.com" className="text-button-blue">support@hudsonhapps.com</a>, click contact us, or dm
                    us on any socials! Feedback is the best way you can let us know what you’d want us to
                    make! As a communal app we want to hear from all of you.
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
