import React from 'react';
import { SubmitButton, AboutButton, ContactUsButton, SignInButton, SignOutButton } from '../icons/Icons';
import './Header.css';

export default function DropdownMenu({ effect }) {
    const authed = true; //placeholder for real authorization check
    return (
        <>
            <div className="relative text-left z-0">
                <div className={`absolute transition-all duration-500 ${effect ? 'top-7' : '-top-40'} left-0 mt-5 w-full origin-top-left bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`} role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1" id='menu'>
                    <div className="py-1" role="none">
                        { !authed ? null :
                            <a href="#" className="text-gray-700 px-4 py-2 text-sm flex" role="menuitem" tabIndex="-1" id="menu-item-0">
                                <SubmitButton params={'mr-2'}/>
                                <p>
                                    Submit a Deal
                                </p>
                            </a>
                        }
                        <a href="#" className="text-gray-700 px-4 py-2 text-sm flex" role="menuitem" tabIndex="-1" id="menu-item-1">
                            <AboutButton params={'mr-2'}/>
                            <p>
                                About
                            </p>
                        </a>
                        <a href="/admin/login" className="text-gray-700 px-4 py-2 text-sm flex" role="menuitem" tabIndex="-1" id="menu-item-2">
                            <ContactUsButton params={'mr-2'}/>
                            <p>
                                Contact Us
                            </p>
                        </a>
                        {/* This should be a Sign In button if not authed, Sign Out if authed*/}
                        <button type="submit" className="text-gray-700 w-full px-4 py-2 text-left text-sm flex" role="menuitem" tabIndex="-1" id="menu-item-3">
                            { !authed ? <SignInButton params={'mr-2'}/> : <SignOutButton params={'mr-2'}/>}
                            <p>
                                {!authed ? 'Sign In' : 'Sign Out'}
                            </p>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
