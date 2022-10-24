import React from "react";

export default function Footer() {
    return (
        <>
            <footer class="relative w-full p-4 bg-[#51535C] shadow md:px-6 md:py-8 z-0">
                <div class="sm:flex sm:items-center sm:justify-between">
                    <a href="/" class="flex items-center mb-4 sm:mb-0">
                        { /* <img src="" class="mr-3 h-8" alt="Hudson Happs Logo" /> */ }
                        <span class="self-center text-2xl font-semibold whitespace-nowrap text-white">Hudson Happs</span>
                    </a>
                    <ul class="flex flex-wrap items-center mb-6 text-sm text-white sm:mb-0 ">
                        <li>
                            <a href="#" class="mr-4 hover:underline md:mr-6 ">About</a>
                        </li>
                        <li>
                            <a href="#" class="mr-4 hover:underline md:mr-6">Contact Us</a>
                        </li>
                    </ul>
                </div>
                <hr class="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                <span class="block text-sm text-gray-300 sm:text-center ">© 2022 <a href="/" class="hover:underline">Hudson Happs™</a>. All Rights Reserved.
                </span>
            </footer>
        </>
    );
}