import React from "react";
import { GoogleMap, useJsApiLoader, OverlayView } from "@react-google-maps/api";
import axios from "axios";
import { LoadingAnimation } from "../icons/LoadingAnimation";
import "./test.css";
const containerStyle = {
  width: "100%",
  height: "100%",
  position: "relative",
  borderRadius: "0.5rem",
};

const center = {
  lat: 40.745255,
  lng: -74.034775,
};

const getPixelPositionOffset = (width, height) => ({
  x: -(width / 2),
  y: -(height / 2),
});

const Map = ({ deals }) => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  const [selectedPlace, setSelectedPlace] = React.useState(0);
  const [map, setMap] = React.useState(null);
  const [markerLocations, setMarkerLocations] = React.useState([]);

  const onLoad = React.useCallback(async function callback(map) {
    const url = `${process.env.REACT_APP_API_URL}/api/map/locations${deals
      .map((data, index) => `${index === 0 ? "?" : "&"}deals=${data._id}`)
      .toString()
      .replaceAll(",", "")}`;
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

  const selectedMark = markerLocations[selectedPlace];
  return isLoaded ? (
    <div className="w-full flex h-full flex-col p-4">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
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
                  map.panTo({ lat: mark.lat, lng: mark.lng });
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
      {selectedMark ? (
        <button
          onClick={() => {
            map.panTo({ lat: selectedMark.lat, lng: selectedMark.lng });
            if (map.zoom !== 17) {
              map.setZoom(17);
            }
          }}
        >
          <div className="w-full bg-white mt-2 p-3 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold">{selectedMark?.placeName}</h1>
            <h3>{selectedMark.title}</h3>
          </div>
        </button>
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
