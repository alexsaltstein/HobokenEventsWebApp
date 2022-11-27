import React from "react";

export const NotFound = () => {
  return (
    <div className="flex justify-center w-full">
        <section class="bg-white">
            <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div class="mx-auto max-w-screen-sm text-center">
                    <h1 class="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-hoboken-blue">404</h1>
                    <p class="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl">Something's missing.</p>
                    <p class="mb-4 text-lg font-light text-gray-500">Sorry, we can't find that page. You'll find lots to explore on the home page. </p>
                    <a href="/" class="inline-flex text-white bg-button-blue focus:ring-4 focus:outline-none font-semibold rounded-lg text-sm px-5 py-2.5 text-center my-4">Back to Homepage</a>
                </div>   
            </div>
        </section>
    </div>
  );
};
