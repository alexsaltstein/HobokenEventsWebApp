import "twin.macro";
import React from 'react'
import { MapIcon, ListIcon, SortIcon } from "../../icons/Icons";


export const ViewButton = ({ mapView, mapOnClick, sortOnClick }) => {
    return (
        <div className={'fixed h-20 w-screen bottom-5 z-30 2xl:hidden'}>
          <div className="flex h-full w-full justify-center items-center">
              <div className="flex bg-button-blue rounded">
                <button
                  className="flex h-10 w-24 bg-button-blue top rounded justify-center items-center shadow text-white stroke-white"
                  onClick={mapOnClick}
                >
                  {!mapView ?
                    <>
                      <MapIcon tw="h-5 w-5 mr-1 fill-transparent" />
                      Map
                    </> :
                    <>
                      <ListIcon tw="h-5 w-5 mr-1 fill-transparent" />
                      List
                    </>                  
                  }
                </button> 
                <div className="mt-1.5 text-white">
                  |
                </div>
                <button
                  className="flex h-10 w-24 bg-button-blue top rounded justify-center items-center shadow text-white stroke-white"
                  onClick={sortOnClick}
                >
                  {!mapView ?
                    <>
                      <SortIcon tw="h-5 w-5 mr-1 fill-transparent" />
                      Sort
                    </> :
                    null            
                  }
                </button>
              </div>
          </div>
        </div>
    );
}