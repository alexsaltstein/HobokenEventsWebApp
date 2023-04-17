/** @jsxImportSource @emotion/react */
import "twin.macro";
import React from "react";
import { GoogleMap, useJsApiLoader, OverlayView } from "@react-google-maps/api";
import axios from "axios";
import { LoadingAnimation } from "../icons/LoadingAnimation";
import "./test.css";
import { Link } from "react-router-dom";
import {
  RightArrowIcon,
  CenterLocationIcon,
  DirectionsIcon,
  XIcon
} from "../icons/Icons";
const containerStyle = {
  width: "100%",
  height: "100%",
  position: "relative",
};

const center = {
  lat: 40.712255,
  lng: -74.044775,
};

const getPixelPositionOffset = (width, height) => ({
  x: -(width / 2),
  y: -(height / 2),
});

const Map = ({ day, filters, filterResult }) => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  const [selectedPlace, setSelectedPlace] = React.useState(-1);
  const [map, setMap] = React.useState(null);
  const [markerLocations, setMarkerLocations] = React.useState([]);

  const onLoad = React.useCallback(async function callback(map) {
    const url = `${process.env.REACT_APP_API_URL}/api/map/locations?day=${day}&${filterResult}${filters.hobo ? "&city=Hoboken" : ""}${
      filters.jc ? "&city=Jersey City" : ""
    }${filters.active ? `&active=${filters.active}` : ""}`;
    const res = await axios.get(url);
    const locations = res.data.mapLocations;
    setMarkerLocations(res.data.mapLocations);

    const bounds = new window.google.maps.LatLngBounds(center);
    for (var i = 0; i < locations.length; i++) {
      bounds.extend({
        lat: locations[i].lat,
        lng: locations[i].lng,
      });
    }
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  const closeButton = () => {
    setSelectedPlace(-1);
  };

  const selectedMark = markerLocations[selectedPlace];
  return isLoaded ? (
    <div className="w-full lg:pr-2 flex h-full min-h-screen pt-4 flex-col">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
        clickableIcons={false}
        options={{ fullscreenControl: false, zoomControl: false, gestureHandling: 'greedy' }}
      >
        {markerLocations.map((mark, index) => {
          const selected = selectedPlace === index;
          return (
            <OverlayView
              position={{ lat: mark.lat, lng: mark.lng }}
              mapPaneName={
                selected
                  ? OverlayView.FLOAT_PANE
                  : OverlayView.OVERLAY_MOUSE_TARGET
              }
              getPixelPositionOffset={getPixelPositionOffset}
            >
              <button
                onClick={() => {
                  setSelectedPlace(index);
                  map.panTo({ lat: mark.lat - 0.0008, lng: mark.lng });
                  if (map.zoom !== 17) {
                    map.setZoom(17);
                  }
                }}
                title={mark.title}
              >
                <div className="popup-container">
                  <div
                    className={`popup-bubble ${
                      selected ? "bg-green-600" : "bg-button-blue"
                    }`}
                  >
                    <h1
                      className={`text-white ${selected ? "font-bold" : null}`}
                    >
                      {mark.placeName}
                    </h1>
                  </div>
                  <div
                    className={`${
                      selected
                        ? "popup-bubble-anchor-selected"
                        : "popup-bubble-anchor"
                    }`}
                  />
                </div>
              </button>
            </OverlayView>
          );
        })}
      </GoogleMap>
      <div className="absolute left-0 top-44 flex px-4 w-full">
          <button
            className="bg-white border-button-blue font-bold text-button-blue border-2 mt-2 p-2 w-fit rounded-lg shadow-md z-50"
            onClick={() => {
              map.panTo({ lat: center.lat, lng: center.lng });
              map.setZoom(13);
            }}
          >
            Reset View
          </button>
      </div>
      {selectedMark  && selectedPlace !== -1 ? (
      <>
        <div className="absolute left-0 bottom-2 md:bottom-32 flex px-4 justify-center w-full">
          <div className="bg-white mt-2 p-3 w-full lg:w-3/4 rounded-lg shadow-md z-50">
              <div>
                <div>
                  <div className="flex justify-between">
                    <button
                      onClick={() => {
                        map.panTo({ lat: selectedMark.lat - 0.0008, lng: selectedMark.lng });
                        if (map.zoom !== 17) {
                          map.setZoom(17);
                        }
                      }}
                      className="text-button-blue hover:underline flex items-center"
                    >
                      <CenterLocationIcon tw="h-4" />
                      Jump To Location
                    </button>
                    <button
                      className="flex items-center text-gray-500 z-40 lg:text-sm"
                      onClick={() => {
                        closeButton()
                      }}
                    >
                      <XIcon tw="h-6 w-6" />
                    </button>
                  </div>
                <hr className="my-1" />
                </div>
                <div className="flex items-center justify-space-between pt-1">
                  <Link
                    to={`/place/${selectedMark.placeId}`}
                    className="flex items-center gap-x-2 flex-wrap"
                  >
                    <h1 className="text-2xl font-bold">
                      {selectedMark?.placeName}
                    </h1>
                    <RightArrowIcon />
                  </Link>
                  <div className="flex ml-auto">
                    <a
                      href={`https://www.google.com/maps/dir//${selectedMark.placeName}, ${selectedMark.address}`}
                      target="_blank"
                      rel="noreferrer"
                      className="bg-button-blue p-2 rounded text-white drop-shadow hover:bg-button-hover-blue flex items-center justify-end"
                    >
                      <DirectionsIcon tw="h-4" />
                      Directions
                    </a>
                  </div>
                </div>
                <div>
                  All deals available:{" "}
                  {selectedMark.deals.map((deal) => {
                    return (
                      <Link to={`/place/${deal.placeId}?deal_id=${deal._id}`}>
                        <h3 className="hover:underline">- {deal.title}</h3>
                      </Link>
                    );
                  })}
                </div>
              </div>
          </div>
        </div>
      </>
      ) : selectedPlace !== -1 ? (
        <div className="absolute left-0 bottom-48 md:bottom-32 flex px-4 justify-center w-full">
        <div className="bg-white mt-2 p-3 w-full lg:w-3/4 rounded-lg shadow-md z-50">
        <div className="flex items-center justify-center w-full h-full gap-x-2">
          <LoadingAnimation />
          <p>Places loading...</p>
        </div>
        </div>
        </div>
      ) : null}
    </div>
  ) : (
    <div className="flex items-center justify-center w-full h-full">
      <LoadingAnimation />
      <p>Map loading...</p>
    </div>
  );
};

export default React.memo(Map);
