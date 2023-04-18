import React from "react";
export default function Banner() {
  return (
    <>
      <div className="flex w-screen aspect-auto" id="banner">
        <div className="relative left-0 flex w-full h-1/4 max-h-64">
          <div className="overflow-hidden">
            <picture>
              {/* <source srcSet="hudson.webp" type="image/webp" /> */}
              <source srcSet="hudson.jpg" type="image/jpeg" />
              <img
                className="xl:hidden w-full h-full"
                src="/hudson.jpg"
                alt="banner"
              />
            </picture>
            <picture>
              {/* <source srcSet="nyclarge.webp" type="image/webp" /> */}
              <source srcSet="nyclarge.jpg" type="image/jpeg" />
              <img
                className="hidden xl:block w-full h-full object-cover object-center"
                src="/nyclarge.jpg"
                alt="4kbanner"
              />
            </picture>
            <div className="absolute top-0 w-full h-full opacity-50 bg-gradient-to-r from-gray-500 to-transparent" />
          </div>
          <div className="absolute flex h-1/3 items-center">
            <h1 className="font-bold text-white text-xl sm:text-2xl: h-full max-w-xs xl:max-w-sm relative top-full left-8 md:text-3xl flex items-center">
              Find your perfect happy hours and happenings
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
