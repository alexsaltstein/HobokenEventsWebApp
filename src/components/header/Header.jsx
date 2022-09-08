import React, {useState} from 'react';
import DropdownMenu from './DropdownMenu';
import './Header.css';


export default function Header() {
    const [effect, setEffect] = useState(false);

    function animateMenuIcon() {
        const container = document.getElementById('menuButton');
        container.classList.toggle("change");
        setEffect(!effect);
    }

    return (
        <>
            <div className="relative w-screen md:w-1/2">
                <DropdownMenu effect={effect}/>
            </div>
            <div className='absolute flex top-0 left-0 w-screen h-12 bg-hoboken-blue z-10' id='header'>
                <div className="relative left-2 top-[18px] w-1/6 h-2 z-10 md:w-[2%]" id="menuButton" onClick={animateMenuIcon} onAnimationEnd={() => setEffect(false)}>
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                </div>
                <div className="w-2/3 md:w-[70%] lg:w-10/12 xl:w-[90%] 2xl:w-[95%] text-center md:text-left">
                    <img src='logo.png' alt='logo' className='hidden relative top-0 left-2 right-0 h-full aspect-[3/1]'/>
                    <h1 className='text-white font-bold m-2 pl-1 text-xl'>Hoboken Events</h1>
                </div>
                <div className="w-1/6 md:w-[30%] lg:w-2/12 xl:w-[10%] 2xl:w-[5%] grid grid-cols-2 right-2 justify-items-end text-white text-xs">
                    <div className='hidden md:inline-block hover:bg-[#788A9B] mr-2 w-full'>
                        <div className='relative top-2 left-0 right-0 w-full text-center text-lg'>
                            Login
                        </div>
                    </div>
                    <div className='hidden md:inline-block hover:bg-[#788A9B] ml-2 w-full'>
                        <div className='relative top-2 left-0 right-0 w-full text-center text-lg'>
                            Sign Up
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
