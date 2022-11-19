import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";
import { EventItem } from "../components/events/EventItem";
import {
  DirectionsIcon,
  PhoneIcon,
  WebsiteIcon,
} from "../components/icons/Icons";
import { ResponsiveGrid } from "../components/templates/ResponsiveGrid";
import { Loading } from "../utils/Loading";

export const Place = () => {
  const { id } = useParams();
  const [loading, setLoading] = React.useState(true);
  const [placeData, setPlaceData] = React.useState(null);
  const [showExtendedHours, setShowExtendedHours] = React.useState(false);

  const fetchData = React.useCallback(async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/deal?placeId=${id}`
      );
      setPlaceData(res.data);
      setLoading(false);
    } catch (e) {
      setLoading(false);
    }
  }, [id]);

  React.useEffect(() => {
    (async () => {
      await fetchData();
    })();
  }, [fetchData]);

  if (loading) {
    return (
      <div className="p-4 flex w-full items-center flex-col">
        <Loading className="h-full mb-6" loading={loading}/>
        </div>
    )
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
    <div className="p-4 flex w-full items-center flex-col">
      {topPhoto ? (
        <img
          className="object-none h-32 md:h-48 w-full"
          src={topPhoto}
          alt={`Cover for ${name}`}
        />
      ) : null}
      <h1 className="underline text-2xl">{name}</h1>
      <h2 className="text-xl">{googleInfo.address}</h2>
      <button
        className="flex gap-x-2 items-baseline"
        onClick={() => setShowExtendedHours(!showExtendedHours)}
      >
        <h2 className="text-xl font-bold">
          {googleInfo.opening_hours.open_now ? (
            <span className="text-green-600">Open now</span>
          ) : (
            <span className="text-red-600">Closed</span>
          )}
        </h2>
        <div className={showExtendedHours ? null : `rotate-180`}>▲</div>
      </button>
      {showExtendedHours ? (
        <div>
          {googleInfo.opening_hours.weekday_text.map((hours, index) => (
            <p className={index === dayOfWeek ? `font-bold` : null}>{hours}</p>
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
            <WebsiteIcon />
          </a>
        ) : null}
        <a
          href={`https://www.google.com/maps/dir//${googleInfo.location.lat},${googleInfo.location.lng}`}
          target="_blank"
          rel="noreferrer"
          className="bg-button-blue p-2 rounded text-white drop-shadow hover:bg-button-hover-blue"
        >
          <DirectionsIcon />
        </a>
      </div>
      <div className="w-full mt-4">
        <ResponsiveGrid>
          {deals.map((deal) => (
            <EventItem eventData={deal} key={deal._id} />
          ))}
        </ResponsiveGrid>
      </div>
    </div>
  );
};
