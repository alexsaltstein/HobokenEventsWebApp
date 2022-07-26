import React from 'react';
import './Header.css';


export default function Header() {
    function myFunction() {
        const container = document.getElementById('container')
        container.classList.toggle("change");
    }

    return (
        <>
            <div className='fixed flex top-0 left-0 w-screen h-8 bg-hoboken-blue' id='header'>
                <div className="w-6" id="container" onClick={myFunction}>
                    <div className="fixed top-3 left-2 w-6 h-2">
                        <div className="bar1"></div>
                        <div className="bar2"></div>
                        <div className="bar3"></div>
                    </div>
                </div>
                <div className="w-4/6 sm:w-5/6 lg:w-10/12 xl:w-[90%] 2xl:w-[95%]">
                    <img src='logo.png' alt='logo' className='relative top-0 left-2 right-0 h-full aspect-[3/1]'/>
                </div>
                <div className="w-2/6 sm:w-1/6 lg:w-2/12 xl:w-[10%] 2xl:w-[5%] grid grid-cols-2 right-2 justify-items-end text-white text-xs">
                    <div className='hover:bg-[#788A9B] mr-2'>
                        <div className='relative top-2 left-0 right-0 w-10 text-center'>
                            Login
                        </div>
                    </div>
                    <div className='hover:bg-[#788A9B] ml-2'>
                        <div className='relative top-2 left-0 right-0 w-14 text-center'>
                            Sign Up
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
