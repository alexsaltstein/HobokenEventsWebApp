import React from 'react';
import './Header.css';

// Def should add some icons here
export default function DropdownMenu({ effect }) {
    return (
        <>
            <div className="relative text-left z-0">
                <div className={`absolute transition-all duration-500 ${effect ? 'top-7' : '-top-40'} left-0 mt-5 w-full origin-top-left bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`} role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1" id='menu'>
                    <div className="py-1" role="none">
                        {/* This should be a hidden if not authed, Submit a Deal if authed*/}
                        <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-0">Submit a Deal</a>
                        <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-1">About</a>
                        <a href="/admin/login" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-2">Contact Us</a>
                        {/* This should be a Sign In button if not authed, Sign Out if authed*/}
                        <button type="submit" className="text-gray-700 block w-full px-4 py-2 text-left text-sm" role="menuitem" tabIndex="-1" id="menu-item-3">Sign out</button>
                    </div>
                </div>
            </div>
        </>
    );
}
