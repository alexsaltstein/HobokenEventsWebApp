import axios from "axios";
import React from "react";
import { useUserState } from "../../../../utils/userState";
import { AddDealElement } from "../../../form/AddDealElement";
import { ErrorText } from "../../../form/ErrorText";
import { GenericInput } from "../../../form/GenericInput";

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
    <div>
      <p>placeInfo:{JSON.stringify(placeInfo)}</p>
      <p>deals:{JSON.stringify(deals)}</p>
      <p>Hi, {user.firstName}</p>
      <ErrorText>
        {Object.keys(error).length > 0 ? "Error submitting form" : null}
      </ErrorText>
      <GenericInput
        required
        label="Google place id"
        name="googlePlaceId"
        type="text"
        onChange={(event) => handleChangeEvent(event, "googlePlaceId")}
        error={error}
      />
      <GenericInput
        required
        label="Name of Place"
        name="name"
        type="text"
        onChange={(event) => handleChangeEvent(event, "name")}
        error={error}
      />
      <GenericInput
        required
        label="Address of Place"
        name="address"
        type="text"
        onChange={(event) => handleChangeEvent(event, "address")}
        error={error}
      />
      {deals.map((deal, index) => {
        return (
          <AddDealElement
            key={`deal-${index}`}
            deal={deal}
            removeDeal={() => removeDeal(index)}
          />
        );
      })}
      <button onClick={() => addNewDeal()}>Add Deal</button>
      <button onClick={() => handleFormSubmit()}>Submit</button>
    </div>
  );
};
