import axios from "axios";
import React from "react";
import { SearchIcon } from '../icons';
import {DebounceInput} from 'react-debounce-input';



export const Autocomplete = ({ input, setInput, setError, setGoogleData, placeInfo  }) => {
    const getAutoCompleteData = async (queryParam) => {
        try {
          const res = await axios.get(
            `${process.env.REACT_APP_API_URL}/api/google/autocomplete/?input=${queryParam}`)
            console.log(res.data.predictions)
          setGoogleData(res.data.predictions)
        } catch(e) {
            console.log(e)
          setError(e)
        }
      }

    React.useEffect(() => {
       getAutoCompleteData(input)

      },[input]);

    return (
    <div className={`relative w-[95%] m-auto mb-2`}>
      <label
        htmlFor={"What's the name of place?"}
        className="absolute left-1 top-1 z-10 m-1 text-input-label-gray text-sm"
      >
      What's the name of place?
     <span className="text-red-400">*</span>
      </label>
      <div className="absolute right-2 top-4">
        <svg className="w-6 h-6 relative float-right" fill="none" stroke="#A6A6A6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          {SearchIcon}
        </svg>
      </div>
            <DebounceInput
            className="border mt-1 mb-1 rounded w-full h-12 pl-2 pt-5"
            value={placeInfo.name}
            debounceTimeout={600}
            onChange={event => setInput(event.target.value)}
            />
      </div>
    )
}