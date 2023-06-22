/** @jsxImportSource @emotion/react */
import tw from "twin.macro";
import React from "react";
import { XIcon } from "../icons/Icons";

const SearchResultItem = ({ placeTitle, placeId, dealTitle, className }) => {
  return (
    <div className={className} tw="p-4">
      <a href={`/place/${placeId}`}>
        <h3 tw="font-bold text-xl">{placeTitle}</h3>
        <p>{dealTitle}</p>
      </a>
    </div>
  );
};
export const FullSiteSearch = ({ showSearch, onSearchDismiss }) => {
  const [searchResults, setSearchResults] = React.useState([
    //Change this
    ...Array(100).keys(),
  ]);

  const [searchTerm, setSearchTerm] = React.useState("");

  //create a function to get the search results based on the term
  return (
    <>
      {showSearch ? (
        <div tw="fixed top-0 left-0 w-full h-full z-50 flex justify-center">
          <div
            tw="fixed top-0 left-0 h-full w-full bg-gray-500 opacity-20 z-30 overflow-hidden"
            onClick={() => onSearchDismiss()}
          />

          <div
            id="searchModal"
            tabIndex="-1"
            aria-hidden="true"
            tw="fixed z-50 flex flex-col top-[50px] shadow bg-white text-lg"
          >
            <div tw="w-full bg-gray-200 flex items-center justify-center">
              <button
                tw="absolute top-1 right-1 text-black z-50"
                onClick={() => onSearchDismiss()}
              >
                <XIcon />
              </button>
              <input
                tw="w-[80%] p-2 py-2 my-4 font-bold rounded bg-transparent border-transparent focus:border-transparent focus:ring-0"
                placeholder="What are you looking for?"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
              />
            </div>
            <div tw="h-[70vh] w-[80vw] overflow-scroll px-4 py-2">
              {searchResults.map((val, index) => (
                <SearchResultItem
                  css={index !== searchResults.length - 1 ? tw`border-b` : null}
                  placeTitle={"A place " + val}
                  dealTitle={"dealTitle" + val}
                />
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};
