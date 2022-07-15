import React from 'react';


export default function Header() {
    return (
        <>
            <div className='fixed flex top-0 left-0 w-screen h-20 bg-hoboken-blue'>
                <div class="w-2/5">
                    <img src='logo.png' alt='logo' className='relative top-0 left-2 right-0 h-full aspect-[3/1]'/>
                </div>
                <div class="w-3/5 grid grid-cols-2 justify-items-center">
                    <button class="relative top-2 left-32 mr-1 h-10 bg-button-green hover:bg-green-700 text-white font-bold py-2 px-4 border border-green-700 rounded">
                        Add new event
                    </button>
                    <div class="relative top-2 left-2">
                        <div class="mb-3 xl:w-96">
                            <div class="input-group relative flex flex-wrap items-stretch w-full mb-4 rounded">
                            <input type="search" class="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon2" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
