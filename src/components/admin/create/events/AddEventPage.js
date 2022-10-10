import axios from "axios";
import React from "react";
import { useUserState } from "../../../../utils/userState";
import { AddDealElement } from "../../../form/AddDealElement";
import { ErrorText } from "../../../form/ErrorText";
import { GenericInput } from "../../../form/GenericInput";
import { SearchIcon, LocationIcon, MapIcon } from '../../../icons';

export const AddEventPage = () => {
  const API_URL = process.env.REACT_APP_API_URL;
  const [user] = useUserState();
  const [placeInfo, setPlaceInfo] = React.useState({});
  const [deals, setDeals] = React.useState([]);
  const [error, setError] = React.useState({});

  const handleChangeEvent = (event, option) => {
    setPlaceOption(option, event.target.value);
  };

  const setPlaceOption = (option, val) => {
    const newPlaceInfo = placeInfo;
    newPlaceInfo[option] = val;
    setPlaceInfo({ ...newPlaceInfo });
  };

  const addNewDeal = () => {
    const newDeals = deals;
    newDeals.push({});
    setDeals([...newDeals]);
  };

  const removeDeal = (index) => {
    const newDeals = deals;
    for (let i = 0; i < newDeals.length; i++) {
      if (i === index) {
        newDeals.splice(index, 1);
        setDeals([...newDeals]);
      }
    }
  };

  const handleFormSubmit = async () => {
    const newError = {};
    if (!placeInfo.name || placeInfo.name.length === 0) {
      newError["name"] = "Error: name must not be blank";
    }
    if (!placeInfo.address || placeInfo.address.length === 0) {
      newError["address"] = "Error: address must not be blank";
    }
    setError({ ...newError });
    if (Object.keys(error).length !== 0) {
      return;
    }

    const res = await axios.post(
      `${API_URL}/api/place/create`,
      {
        ...placeInfo,
        deals,
      },
      {
        headers: {
          "x-access-token": user.token,
        },
      }
    );
    console.log(res);
  };

  return (
    <>
      <div className="flex">
        <div className="hidden md:flex md:w-1/6 lg:w-1/3" />
        <div className="md:w-4/6 lg:w-1/3">
          <p>placeInfo:{JSON.stringify(placeInfo)}</p>
          <p>deals:{JSON.stringify(deals)}</p>
          <p className="relative text-xl font-bold text-hoboken-blue left-4">Hi {user.firstName}, lets create a happening</p>
          <ErrorText>
            {Object.keys(error).length > 0 ? "Error submitting form" : null}
          </ErrorText>
          <div className="relative left-4 mb-4 w-[95%]">
            <div className="text-4xl font-bold">
              Location Info
            </div>
            <p className="text-gray-500 mt-1">Help people in the area discover your happening and let attendees know where to show up.</p>
          </div>
          <div className="relative">
            <GenericInput
              required
              label="Google Place ID"
              name="googlePlaceId"
              type="text"
              onChange={(event) => handleChangeEvent(event, "googlePlaceId")}
              error={error}
              extraProps="w-[95%] m-auto mb-2"
              icon={<SearchIcon />}
            />
            <GenericInput
              required
              label="Name of Location"
              name="name"
              type="text"
              onChange={(event) => handleChangeEvent(event, "name")}
              error={error}
              extraProps="w-[95%] m-auto mb-2"
              icon={<LocationIcon />}
            />
            <GenericInput
              required
              label="Address of Location"
              name="address"
              type="text"
              onChange={(event) => handleChangeEvent(event, "address")}
              error={error}
              extraProps="w-[95%] m-auto mb-2"
              icon={<MapIcon />}

            />
            <div className="relative left-4 mb-4 w-[95%]">
              <div className="text-4xl font-bold">
                Event Info
              </div>
              <p className="text-gray-500 mt-1">Specify the date and time for the happening and what kind of happening it is.</p>
            </div>
            {deals.map((deal, index) => {
              return (
                <AddDealElement
                  key={`deal-${index}`}
                  deal={deal}
                  removeDeal={() => removeDeal(index)}
                />
              );
            })}
          </div>
          <div className="relative">
            <button type="button"
              className="text-white bg-button-blue focus:ring-4 focus:ring-blue-300 font-medium rounded text-sm px-5 py-2.5 m-2"
              onClick={() => addNewDeal()}
            >
              Add Deal
            </button>
          </div>
          <div className="relative bottom-0">
            <hr className="w-full bg-white" />
            <div className="absolute right-0">
              <button type="button"
                className="text-white bg-button-blue focus:ring-4 focus:ring-blue-300 font-medium rounded text-sm px-5 py-2.5 m-2"
                onClick={() => handleFormSubmit()}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
        <div className="hidden md:flex md:w-1/6 lg:w-1/3" />
      </div>
    </>
  );
};
