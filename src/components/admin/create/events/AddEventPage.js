import axios from "axios";
import React from "react";
import { useUserState } from "../../../../utils/userState";
import { AddDealElement } from "../../../form/AddDealElement";
import { ErrorText } from "../../../form/ErrorText";
import { GenericInput } from "../../../form/GenericInput";
import { MapIcon } from "../../../icons";
import { Autocomplete } from "../../../form/Autocomplete";

export const AddEventPage = () => {
  const [user] = useUserState();
  const [placeInfo, setPlaceInfo] = React.useState({});
  const [input, setInput] = React.useState("");
  const [deals, setDeals] = React.useState([{}]);
  const [error, setError] = React.useState({});
  const [googleData, setGoogleData] = React.useState([]);
  const [hidden, setHidden] = React.useState(true);
  const dealArr = [];

  const childToParent = (childData) => {
    setHidden(childData);
  };

  const handleChangeEvent = async (event, option) => {
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

  const addDealToState = (deal) => {
    setDeals([...deals, deal]);
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
    try {
    const newError = [];
    setDeals(dealArr);
    if (!placeInfo.name || placeInfo.name.length === 0) {
      newError.name = "Location Name is required";
    }
    if (!placeInfo.address || placeInfo.address.length === 0) {
      newError.address = "Address of Location is required";
    }
    if (deals.length < 1) {
      newError.deals = "At least 1 deal is required";
    }else{
      deals.map(deal => {
        if(!deal.title || deal.title.length === 0){
          newError.dealTitle = "Each deal requires a title";
        }
        if(!deal.deals || deal.deals.length === 0){
          newError.dealDesc = "Each deal requires a Description";
        }
        if(!deal.dayOfWeek || deal.dayOfWeek.length === 0){
          newError.dealDay = "Each deal requires at least 1 day of the week";
        }
        if(!deal.startTime || deal.startTime.length === 0){
          newError.dealTime = "Each deal requires a start time";
        }
      })
    }
    if (Object.keys(newError).length !== 0) {
      throw newError
    }
    const res = await axios.post(
      `${process.env.REACT_APP_API_URL}/api/place/create`,
      {
        ...placeInfo,
        deals,
      },
      {
        headers: {
          Authorization: `${user.token}`,
        },
      }
    );
    console.log("res", res);
    console.log("stuff", {
      ...placeInfo,
      deals,
    });
    window.location.reload()
    return;
  } catch(e) {
    const errors = []
    Object.keys(e).map(err =>{
      errors[err] = e[err]
    })
    setError({...errors})
    setDeals([...deals])
    console.error(error)
  }
  };

  const getGoogleDataByPlaceId = async (index) => {
    setHidden(true);
    const resp = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/google/${googleData[index].place_id}`
    );
    if (resp) {
      const placeData = resp.data;
      setPlaceOption("name", placeData.name);
      setPlaceOption("address", placeData.address);
      setPlaceOption("googlePlaceId", googleData[index].place_id);
      addNewDeal();
    }
  };
  return (
    <>
      <div
        className="flex relative w-full min-h-full"
        onClick={() => setHidden(true)}
      >
        <div className="hidden md:flex md:w-1/6 lg:w-1/3" />
        <div className="md:w-4/6 lg:w-1/3">
          <p className="relative text-xl font-bold text-hoboken-blue left-4">
            Hi {user.firstName}, let's create an event
          </p>
          <ErrorText extraProps={"ml-4"}>
            {Object.keys(error).map(e => <div>{error[e]}</div>)}
          </ErrorText>
          <div className="relative left-4 mb-4 w-[95%]">
            <div className="text-4xl font-bold ">Location Info</div>
            <p className="text-gray-500 mt-1">
              Help people in the area discover your event and let attendees
              know where to show up.
            </p>
          </div>
          <div className="relative">
            <div className="relative z-20">
              <Autocomplete
                placeInfo={placeInfo}
                setInput={setInput}
                input={input}
                setGoogleData={setGoogleData}
                setError={setError}
                childToParent={childToParent}
              />
              <div
                className={`relative -top-2 w-[95%] mx-auto border overflow-y-scroll drop-shadow-sm bg-white ${
                  hidden ? "hidden" : ""
                }`}
              >
                <ul className="">
                  {googleData &&
                    googleData.map((guess, i) => {
                      return (
                        <li
                          className="w-[95%] h-auto m-auto pt-2 pb-2 border-t hover:text-button-blue"
                          onClick={() => getGoogleDataByPlaceId(i)}
                          key={i}
                        >
                          {guess.description}
                        </li>
                      );
                    })}
                </ul>
              </div>
            </div>
            <GenericInput
              required
              label="Address of Location"
              type="text"
              value={placeInfo.address}
              onChange={(event) => handleChangeEvent(event, "address")}
              error={error}
              extraProps="w-[95%] m-auto mb-2"
              icon={<MapIcon />}
            />
            <div className="relative left-4 mb-4 w-[95%]">
              <div className="text-4xl font-bold">Event Info</div>
              <p className="text-gray-500 mt-1">
                Specify the date, time, and other details of the event.
              </p>
            </div>
            {deals.map((deal, index) => {
              return (
                <AddDealElement
                  key={`deal-${index}`}
                  index={index}
                  deals={deals}
                  deal={deal}
                  setDeals={setDeals}
                  addDealToState={() => addDealToState()}
                  dealArr={dealArr}
                  removeDeal={() => removeDeal(index)}
                />
              );
            })}
          </div>
          <div className="relative">
            <button
              type="button"
              className="border-2 text-black bg-button-blue focus:ring-4 focus:ring-blue-300 font-medium rounded text-sm px-5 py-2.5 m-2"
              onClick={() => addNewDeal()}
            >
              Add Deal
            </button>
          </div>
          <div className="relative bottom-0">
            <hr className="w-full bg-white" />
            <div className="right-0">
              <button
                type="button"
                className="border-2 text-black bg-button-blue focus:ring-4 focus:ring-blue-300 font-medium rounded text-sm px-5 py-2.5 m-2"
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
