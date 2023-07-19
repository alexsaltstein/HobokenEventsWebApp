import React, { useState } from "react";
import axios from "axios";
import { XIcon } from "../icons/Icons";
import { ErrorText } from "../form/ErrorText";
import { LoadingAnimation } from "../icons/LoadingAnimation";
import { useUserState } from "../../utils/userState";

export default function ClaimPlaceModal({ title, placeId, onDismiss }) {
  const [value, setValue] = useState("");
  const [reason, setReason] = useState("");
  const [showError, setShowError] = useState(null);
  const [loading, setLoading] = React.useState(false);
  const [user] = useUserState();

  const onClick = async () => {
    setLoading(true);

    if (
      value === "" ||
      (value === "Other" && reason.length === 0)
    ) {
      setShowError(true);
      setLoading(false);
    } else {
      try {
        await axios.put(`${process.env.REACT_APP_API_URL}/api/place/claim/${placeId}`, {
          token: value
        },
        {
          headers: {
            Authorization: `${user.token}`,
          },
        });
        setLoading(false);
        onDismiss();
      } catch (e) {
        console.error("Error claiming place", e);
        onDismiss();
      }
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full z-50">
      <div
        className="absolute top-0 left-0 h-full w-full bg-gray-500 opacity-50 z-30 overflow-hidden"
        onClick={() => onDismiss()}
      />
      {/* <!-- Modal content --> */}
      <div className="flex justify-center">
        <div
          id="reportModal"
          tabIndex="-1"
          aria-hidden="true"
          className={`fixed top-1/4 mx-auto h-fit z-50 flex w-fit p-4 overflow-hidden`}
        >
          <div className="bg-white rounded-lg shadow">
            {/* <!-- Modal header --> */}
            <div className="flex items-start justify-between p-4 border-b rounded-t">
              <h3 className="text-xl font-semibold text-gray-900 pt-1">
                {title}?
              </h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                onClick={() => onDismiss()}
              >
                <XIcon />
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            {/* <!-- Modal body --> */}
            <div className="p-6 space-y-2">
              <label
                htmlFor="pass"
                className="block mb-1 text-sm font-medium text-gray-900"
              >
                Enter Your One Time Password:
              </label>
              <input
                id="pass"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                onChange={(e) => {
                  setValue(e.target.value);
                  setReason("");
                  setShowError(false);
                }}
              />
              {showError ? <ErrorText>Please enter a Password</ErrorText> : null}
            </div>
            {/* <!-- Modal footer --> */}
            <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b">
              <button
                className="flex text-white bg-green-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                onClick={() => onClick()}
              >
                Claim
                {loading ? (
                  <div className="relative left-2">
                    <LoadingAnimation />
                  </div>
                ) : null}
              </button>
              <button
                type="button"
                className="text-gray-500 bg-white rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5"
                onClick={() => onDismiss()}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
