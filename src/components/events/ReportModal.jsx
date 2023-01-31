import React, { useState } from "react";
import axios from "axios";
import { XIcon } from "../icons/Icons";
import { ErrorText } from "../form/ErrorText";
import { LoadingAnimation } from "../icons/LoadingAnimation";


export default function ReportModal({ title, reportData, onDismiss }) {
  const [value, setValue] = useState("Choose an issue...")
  const [reason, setReason] = useState(null)
  const [showError, setShowError] = useState(null)
  const [loading, setLoading] = React.useState(false);


  reportData.reason = (value === 'Other' ? reason : value);

    const onClick = async () => {
      setLoading(true);

      if ((((value !== "Choose an issue..." && value !== "Other") && !reason))) {
        try {
          await axios.post(
            `${process.env.REACT_APP_API_URL}/api/deal/report`,
            { dealId: reportData.dealId, reason: reportData.reason },
          );
          setLoading(false);
          onDismiss();
        } catch (e) {
          console.error("Error reporting deal", e);
          console.error("Error reporting deal", reportData);
          onDismiss();
        }
      } else {
        setShowError(true);
      }
    };

  return (
    <div className="absolute -top-36 left-0 w-full h-full">
      <div className="fixed top-0 left-0 h-full w-full bg-gray-500 opacity-50 z-30 overflow-hidden" onClick={() => onDismiss()}/>
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
              <h3 className="text-xl font-semibold text-gray-900 pt-1">{title}?</h3>
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
                htmlFor="problems"
                className="block mb-1 text-sm font-medium text-gray-900"
              >
                What's the problem with this deal?
              </label>
              <select
                id="problems"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                onChange={(e) => {
                  console.log(e.target.value)
                  setValue(e.target.value)
                  setReason(null)
                  setShowError(false)
                }}
              >
                <option defaultValue={""}>Choose an issue...</option>
                <option value="Deal NA">Deal no longer available</option>
                <option value="Deal Wrong">Deal wrong/changed</option>
                <option value="Location Closed">Location permanantly closed </option>
                <option value="Other">Other</option>
              </select>
              {value === "Other" ?
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-900 py-2">Your message</label>
                <textarea
                  id="message"
                  rows="4"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
                  placeholder="Write issue with deal here..."
                  onChange={(e) => {
                    console.log(e.target.value);
                    setReason(e.target.value)
                    setShowError(false)
                  }}
                />
              </div> : null
              }
              {showError ? <ErrorText>Please enter a reason</ErrorText> : null}
            </div>
            {/* <!-- Modal footer --> */}
            <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b">
              <button
                className="flex text-white bg-red-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                onClick={() => onClick()}
              >
                Report
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
