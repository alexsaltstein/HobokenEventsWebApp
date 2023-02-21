import "twin.macro";
import React from 'react'
import { MapIcon } from "../../icons/Icons";


export const ViewButton = ({ mapView, onClick }) => {
    return (
        <div className={`fixed h-20 w-screen ${mapView ? 'top-16' : 'bottom-5'} z-30 2xl:hidden`}>
          <div className="flex h-full w-full justify-center items-center">
              <button
                className="flex h-10 w-24 bg-button-blue top rounded justify-center items-center shadow text-white stroke-white"
                onClick={onClick}
              >
                {!mapView ?
                  <>
                    <MapIcon tw="h-5 w-5 mr-1 mt-0.5 fill-transparent" />
                    Map
                  </> :
                  <>
                    <MapIcon tw="h-5 w-5 mr-1 mt-0.5 fill-transparent" />
                    List
                  </>                  
                }
              </button>
          </div>
        </div>
    );
}