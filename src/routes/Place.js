/** @jsxImportSource @emotion/react */
import "twin.macro";
import axios from "axios";
import React from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { EventItem } from "../components/events/EventItem";
import {
  DirectionsIcon,
  PhoneIcon,
  ExternalLinkIcon,
  ShareIcon,
} from "../components/icons/Icons";
import { DEAL_QUERY_PARAM } from "../constants/common";
import { copyToClipboard } from "../utils/common";
import { Loading } from "../utils/Loading";
import { useScrollIntoView } from "../utils/useScrollIntoView";
import { MetaData } from "../meta/MetaData";

export const Place = () => {
  const { id } = useParams();
  const [loading, setLoading] = React.useState(true);
  const [placeData, setPlaceData] = React.useState(null);
  const [showExtendedHours, setShowExtendedHours] = React.useState(false);
  const [searchParams] = useSearchParams();
  const selectedDeal = searchParams.get(DEAL_QUERY_PARAM);
  const topElemRef = useScrollIntoView([selectedDeal, loading]);

  const fetchData = React.useCallback(async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/place/${id}`
      );
      setPlaceData(res.data);
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }, [id]);

  React.useEffect(() => {
    setLoading(true);
    (async () => {
      await fetchData();
    })();
  }, [fetchData]);

  if (loading) {
    return (
      <div className="p-4 flex w-full items-center flex-col">
        <Loading className="h-full mb-6" loading={loading} />
      </div>
    );
  }

  if (!placeData || placeData.length === 0) {
    return <div>Error getting place</div>;
  }

  const { name, deals, googleInfo } = placeData;
  // need to -1 to date to match up with how google does hours sunday is 6 for google
  let dayOfWeek = new Date().getDay() - 1;
  if (dayOfWeek === -1) {
    dayOfWeek = 6;
  }

  const topPhoto = googleInfo.photos?.length > 0 ? googleInfo.photos[0] : null;

  return (
    <>
      <MetaData
        title={`${name} Happy Hours ${placeData.address.city}, ${placeData.address.state}`}
        description={`Hudson Happs has all the deals and happy hours for ${name} in ${placeData.address.city}, ${placeData.address.state} all in one place. Verified and collected by real people so you don't have to.`}
      />
      <div className="p-4 flex w-full items-center flex-col">
        {topPhoto ? (
          <img
            className="object-none h-40 md:h-48 w-full"
            src={topPhoto}
            alt={`Cover for ${name}`}
          />
        ) : null}
        <div className="mt-4 flex items-center gap-x-2">
          <h1 className="text-2xl font-bold">{name}</h1>
          <button
            className="text-gray-500 z-40"
            onClick={(event) => {
              event.preventDefault();
              const url = window.location.href;
              copyToClipboard(url);
            }}
          >
            <ShareIcon tw="h-5" />
          </button>
        </div>
        <h2 className="text-xl text-center">
          {googleInfo.address.street +
            ", " +
            googleInfo.address.city +
            ", " +
            googleInfo.address.state}
        </h2>
        <button
          className="flex gap-x-2 items-baseline"
          onClick={() => setShowExtendedHours(!showExtendedHours)}
        >
          <h2 className="text-xl font-bold">
            {googleInfo.opening_hours?.open_now ? (
              <span className="text-green-600">Open now</span>
            ) : (
              <span className="text-red-600">Closed</span>
            )}
          </h2>
          <div className={showExtendedHours ? null : `rotate-180`}>▲</div>
        </button>
        {showExtendedHours ? (
          <div>
            {googleInfo.opening_hours?.weekday_text.map((hours, index) => (
              <p className={index === dayOfWeek ? `font-bold` : null}>
                {hours}
              </p>
            ))}
          </div>
        ) : null}
        <div className="flex gap-x-2 mt-3">
          {googleInfo.phone_number ? (
            <a
              href={`tel:${googleInfo.phone_number}`}
              className="bg-button-blue p-2 rounded text-white drop-shadow hover:bg-button-hover-blue"
            >
              <PhoneIcon />
            </a>
          ) : null}
          {googleInfo.website ? (
            <a
              href={googleInfo.website}
              target="_blank"
              rel="noreferrer"
              className="bg-button-blue p-2 rounded text-white drop-shadow hover:bg-button-hover-blue"
            >
              <ExternalLinkIcon />
            </a>
          ) : null}
          <a
            href={`https://www.google.com/maps/dir//${placeData.name}, ${placeData.address.street}, ${placeData.address.city}, ${placeData.address.state}`}
            target="_blank"
            rel="noreferrer"
            className="bg-button-blue p-2 rounded text-white drop-shadow hover:bg-button-hover-blue"
          >
            <DirectionsIcon />
          </a>
        </div>
        <div className="flex flex-wrap w-screen md:px-8 mt-4 max-w-screen-2xl md:columns-2 md:gap-0 2xl:columns-3 justify-center">
          {deals.map((deal) => (
            <div
              className="px-4 md:px-4 max-w-[370px] w-full"
              ref={selectedDeal === deal._id ? topElemRef : null}
            >
              <EventItem eventData={deal} key={deal._id} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
