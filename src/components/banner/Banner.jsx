import React from "react";

export default function Banner() {
  return (
    <>
      <div className="flex w-screen aspect-auto">
        <div className="relative left-0 flex w-full h-1/4 max-h-64">
          <div className="overflow-hidden">
            <picture>
              <source srcSet="nyclarge.webp" type="image/webp" media="(min-width: 1536px)"/>
              <source srcSet="hudson.webp" type="image/webp" media="(min-width: 1280px)"/>
              <source srcSet="hudson-1280_x_640.webp" type="image/webp" media="(min-width: 1024px)"/>
              <source srcSet="hudson-1024_x_512.webp" type="image/webp" media="(min-width: 768px)"/>
              <source srcSet="hudson-768_x_384.webp" type="image/webp" media="(min-width: 640px)"/>
              <source srcSet="hudson-640_x_320.webp" type="image/webp" media="(min-width: 0px)"/>
              <source srcSet="nyclarge.jpg" type="image/jpeg" media="(min-width: 1536px)"/>
              <source srcSet="hudson.jpg" type="image/jpeg" media="(min-width: 1280px)"/>
              <source srcSet="hudson-1280_x_640.jpg" type="image/jpeg" media="(min-width: 1024px)"/>
              <source srcSet="hudson-1024_x_512.jpg" type="image/jpeg" media="(min-width: 768px)"/>
              <source srcSet="hudson-768_x_384.jpg" type="image/jpeg" media="(min-width: 640px)"/>
              <source srcSet="hudson-640_x_320.jpg" type="image/jpeg" media="(min-width: 0px)"/>
              <img
                className="w-full h-full object-cover"
                src="/hudson-640_x_320.jpg"
                alt="banner"
              />
            </picture>
            <picture>
              {/* <source srcSet="nyclarge.webp" type="image/webp" /> */}
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
