import React, { useState } from "react";
import { XIcon } from "../icons/Icons";

export default function ReportModal({ title, onDismiss }) {
  const [value, setValue] = useState(null)
  // eslint-disable-next-line no-unused-vars
  const [message, setMessage] = useState(null)

  return (
    <div>
      <div className="fixed top-0 left-0 h-full w-full bg-gray-500 opacity-50 z-30 overflow-hidden" onClick={() => onDismiss()} />
      <div
        id="reportModal"
        tabIndex="-1"
        aria-hidden="true"
        className={`fixed top-1/4 left-0 z-50 flex w-full p-4 overflow-hidden md:inset-0 md:h-full`}
      >
        <div className="relative my-auto mx-auto w-full h-full max-w-2xl md:h-auto">
          {/* <!-- Modal content --> */}
          <div className="relative bg-white rounded-lg shadow">
            {/* <!-- Modal header --> */}
            <div className="flex items-start justify-between p-4 border-b rounded-t">
              <h3 className="text-xl font-semibold text-gray-900">{title}?</h3>
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
                onChange={(e) => setValue(e.target.value)}
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
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div> : null
              }
            </div>
            {/* <!-- Modal footer --> */}
            <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b">
              <button
                type="button"
                className="text-white bg-red-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Report
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
