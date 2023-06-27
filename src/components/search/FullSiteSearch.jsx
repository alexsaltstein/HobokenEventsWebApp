/** @jsxImportSource @emotion/react */
import tw from "twin.macro";
import React from "react";
import { XIcon } from "../icons/Icons";
import axios from "axios";

const SearchResultItem = ({ placeTitle, placeLink, dealTitle, className }) => {
  return (
    <div className={className} tw="p-4">
      <a href={`/place/${placeLink}`}>
        <h3 tw="font-bold text-xl">{placeTitle}</h3>
        <p>{dealTitle}</p>
      </a>
    </div>
  );
};
export const FullSiteSearch = ({ showSearch, onSearchDismiss }) => {
  const [searchResults, setSearchResults] = React.useState(null);
  const [searchTerm, setSearchTerm] = React.useState("");

  const fetchData = React.useCallback(async () => {
    if (searchTerm.length < 2) {
      setSearchResults(null);
      return;
    }
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/deal/search?text=${searchTerm}`
      );
      setSearchResults(res.data);
    } catch (e) {
      console.error("Error fetching data", e);
      setSearchResults(null);
    }
  }, [searchTerm]);

  React.useEffect(() => {
    (async () => {
      await fetchData();
    })();
  }, [fetchData]);

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
              {!searchResults ? (
                <div>Type atleast 3 characters to search</div>
              ) : (
                <div>
                  <div>
                    <h4>Deals:</h4>
                    {!searchResults.deals?.length ? (
                      <div>no deals found</div>
                    ) : null}
                    {searchResults.deals.map((val, index) => (
                      <SearchResultItem
                        key={val._id}
                        css={
                          index !== searchResults.length - 1
                            ? tw`border-b`
                            : null
                        }
                        placeLink={`${val.placeId}?deal_id=${val._id}`}
                        placeTitle={val.place[0].name}
                        dealTitle={val.title}
                      />
                    ))}
                  </div>
                  <div>
                    <h4>Places:</h4>
                    {!searchResults.places?.length ? (
                      <div>no places found</div>
                    ) : null}
                    {searchResults.places.map((val, index) => (
                      <SearchResultItem
                        key={val._id}
                        css={
                          index !== searchResults.length - 1
                            ? tw`border-b`
                            : null
                        }
                        placeLink={`${val._id}`}
                        placeTitle={val.name}
                      />
                    ))}
                  </div>
                </div>
              )}
              {/* {searchResults.map((val, index) => (
                  <SearchResultItem
                    css={
                      index !== searchResults.length - 1 ? tw`border-b` : null
                    }
                    placeTitle={"A place " + val}
                    dealTitle={"dealTitle" + val}
                  />
                ))} */}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};
