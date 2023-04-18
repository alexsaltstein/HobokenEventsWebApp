import React from "react";
import { useSearchParams } from "react-router-dom";

export const PAGE_QUERY_PARAM = "page_num";
export const PageNumbers = ({ currPage, totalPages }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const onPageChange = (newPageNum) => {
    if (newPageNum < 0 || newPageNum > totalPages+1) {
      return;
    }
    const old = {};
    searchParams.forEach((val, key) => {
      old[key] = val;
    });
    old[PAGE_QUERY_PARAM] = newPageNum-1;
    setSearchParams(old);
  };

  const getPageDisplay = () => {
    if (Math.ceil(totalPages) < 3) {
      return [1, 2];
    }
    if (Math.ceil(totalPages) === 3) {
      return [1, 2, 3];
    }
    if (currPage === totalPages) {
      return [currPage - 1, currPage, currPage + 1];
    }
    if (currPage > 1 && currPage + 1 < totalPages) {
      return [currPage, currPage + 1, currPage + 2];
    } else if(currPage <= 1){
      return [currPage + 1, currPage + 2, currPage + 3];
    } else {
      return [currPage - 1, currPage, currPage + 1];
    }
  };

  return (
    <>
      {totalPages > 1 ? (
        <div className="flex items-center justify-center m-4">
          {currPage > 0 ? (
            <button
              className="border text-gray-500 px-3 py-2 rounded-l-lg hover:bg-gray-200"
              onClick={() => {
                onPageChange(currPage);
              }}
            >
              Prev
            </button>
          ) : null}
          {getPageDisplay().map((page) => {
            return (
              <button
                key={`page-${page}-button`}
                className={`${
                  page === currPage+1
                    ? "border-button-blue bg-blue-200 text-button-blue"
                    : " text-gray-500"
                } border px-3 py-2 hover:bg-gray-200`}
                onClick={() => {
                  onPageChange(page);
                }}
              >
                {page}
              </button>
            );
          })}
          {currPage+1 < totalPages ? (
            <button
              className="border text-gray-500 px-3 py-2 rounded-r-lg hover:bg-gray-200"
              onClick={() => {
                onPageChange(currPage + 2);
              }}
            >
              Next
            </button>
          ) : null}
        </div>
      ) : null}
    </>
  );
};
