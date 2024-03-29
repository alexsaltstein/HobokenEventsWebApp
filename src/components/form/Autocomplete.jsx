import axios from "axios";
import React from "react";
import { SearchIcon } from '../icons/Icons';
import { DebounceInput } from 'react-debounce-input';



export const Autocomplete = ({ input, setInput, setError, setGoogleData, placeInfo, childToParent }) => {
  const [hidden, setHidden] = React.useState(null);
  
  const handleInput = (event) => {
    setHidden(false);
    childToParent(hidden);
    setInput(event.target.value);
  }

    React.useEffect(() => {
      const getAutoCompleteData = async (queryParam) => {
        try {
        if(queryParam) {
          const res = await axios.get(
            `${process.env.REACT_APP_API_URL}/api/google/autocomplete/?input=${queryParam}`)
          setGoogleData(res.data.predictions)
        }
        } catch(e) {
            console.log(e)
          setError(e)
        }
      }
      getAutoCompleteData(input)

      },[input, setError, setGoogleData]);

    return (
      <>
        <div className='relative m-auto focus:drop-shadow-sm'>
          <label
            htmlFor={"Name of Location"}
            className="absolute left-1 top-1 m-1 text-input-label-gray text-sm"
          >
            Name of Location
            <span className="text-red-400">&nbsp;*</span>
          </label>
          <div className="absolute right-2 top-4">
            <svg className="w-6 h-6 relative float-right" fill="none" stroke="#A6A6A6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {<SearchIcon />}
            </svg>
          </div>
          <DebounceInput
            className="border mt-1 mb-1 rounded w-full h-12 pl-2 pt-5"
            value={placeInfo.name}
            debounceTimeout={400}
            onChange={event => handleInput(event)}
          />
        </div>
      </>
    )
}