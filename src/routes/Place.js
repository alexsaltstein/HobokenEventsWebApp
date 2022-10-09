import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";

export const Place = () => {
  const { id } = useParams();
  const [loading, setLoading] = React.useState(true);
  const [placeData, setPlaceData] = React.useState(null);

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
    return <div>Loading...</div>;
  }

  if (!placeData || placeData.length === 0) {
    return <div>Error getting place</div>;
  }

  const { address, name } = placeData[0].place;
  return (
    <div className="p-4">
      <h1 className="underline text-2xl">{name}</h1>
      <h2 className="text-xl">{address}</h2>
      {placeData.map((bigDeal) => (
        <div>
          <p>{bigDeal.description}</p>
          <p>{bigDeal.dayOfWeek}</p>
          <p>deals:</p>
          {bigDeal.deals.map((lilguy) => (
            <p>{lilguy}</p>
          ))}
        </div>
      ))}
    </div>
  );
};
