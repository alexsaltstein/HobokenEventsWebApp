import React, {useState} from 'react';
import DropdownMenu from './DropdownMenu';
import './Header.css';


export default function Header() {
    const [effect, setEffect] = useState(false);
    const authed = false; //placeholder for real authorization check

    function animateMenuIcon() {
        setEffect(!effect);
    }

    return (
        <>
            <nav class="absolute flex top-0 left-0 h-14 w-screen bg-hoboken-blue border-gray-200 py-2.5 z-20">
                <div class="absolute top-0 left-0 container flex flex-wrap justify-between items-center mx-auto md:absolute md:top-auto">
                    <a href="/" class="flex items-center">
                        {/* INSERT LOGO HERE */}
                        <span class="ml-2 my-auto self-center text-xl font-semibold whitespace-nowrap text-white">Hudson Happenings</span>
                    </a>
                    <button type="button" class="inline-flex items-center p-2 ml-3 mr-3 mt-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false" onClick={animateMenuIcon} onAnimationEnd={() => setEffect(false)}>
                        <svg class="w-6 h-6" aria-hidden="true" fill="white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                    </button>
                    <div class="hidden w-full md:block md:w-auto md:fixed md:right-0" id="navbar-default">
                        <ul class="flex flex-col ml-auto p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-hoboken-blue">
                            <li>
                                <a href="#" class="block py-2 pr-4 pl-3 text-white hover:text-gray-200 md:border-0 md:p-0">Home</a>
                            </li>
                            <li>
                                <a href="#" class="block py-2 pr-4 pl-3 text-white hover:text-gray-200 md:border-0 md:p-0">About</a>
                            </li>
                            {
                                !authed ? null :
                                <li>
                                <a href="#" class="block py-2 pr-4 pl-3 text-white hover:text-gray-200 md:border-0 md:p-0">Submit a Happening</a>
                                </li>
                            }
                            <li>
                                <a href="#" class="block py-2 pr-4 pl-3 text-white hover:text-gray-200 md:border-0 md:p-0">Contact Us</a>
                            </li>
                            <li>
                                <a href="/admin/login" class="block py-2 pr-4 pl-3 text-white hover:text-gray-200 md:border-0 md:p-0">
                                    <p>
                                        {!authed ? 'Sign In' : 'Sign Out'}
                                    </p>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="relative w-screen md:w-1/2">
                <DropdownMenu effect={effect} authed={authed}/>
            </div>
        </>
        
    );
}
