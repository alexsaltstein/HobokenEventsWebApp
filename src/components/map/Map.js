import React from "react";
import { GoogleMap, useJsApiLoader, OverlayView } from "@react-google-maps/api";
import axios from "axios";
import { LoadingAnimation } from "../icons/LoadingAnimation";
import "./test.css";
const containerStyle = {
  width: "100%",
  height: "100%",
  position: "relative",
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

  const [selectedPlace, setSelectedPlace] = React.useState(null);
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

  return isLoaded ? (
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
            mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
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
                  <h1 className={`text-white ${selected ? "font-bold" : null}`}>
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
  ) : (
    <div className="flex items-center justify-center w-full h-full">
      <LoadingAnimation />
      <p>Map loading...</p>
    </div>
  );
};

export default React.memo(Map);
