import React from "react";
import { useSearchParams } from "react-router-dom";

export const PAGE_QUERY_PARAM = "page_num";
export const PageNumbers = ({ currPage, totalPages }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const onPageChange = (newPageNum) => {
    if (newPageNum < 0 || newPageNum > totalPages) {
      return;
    }
    const old = {};
    searchParams.forEach((val, key) => {
      old[key] = val;
    });
    old[PAGE_QUERY_PARAM] = newPageNum;
    setSearchParams(old);
  };

  const getPageDisplay = () => {
    if (totalPages < 3) {
      return [0, 1];
    }
    if (currPage === totalPages) {
      return [currPage - 2, currPage - 1, currPage];
    }
    if (currPage > 0) {
      return [currPage - 1, currPage, currPage + 1];
    } else {
      return [currPage, currPage + 1, currPage + 2];
    }
  };

  return (
    <>
      {totalPages > 1 ? (
        <div className="flex items-center m-4">
          {currPage > 0 ? (
            <button
              className="border text-gray-500 px-2 py-1 rounded-l-lg hover:bg-gray-200"
              onClick={() => {
                onPageChange(currPage - 1);
              }}
            >
              Prev
            </button>
          ) : null}
          {getPageDisplay().map((page) => {
            return (
              <button
                className={`${
                  page === currPage
                    ? "border-button-blue bg-blue-200 text-button-blue"
                    : " text-gray-500"
                } border px-2 py-1 hover:bg-gray-200`}
                onClick={() => {
                  onPageChange(page);
                }}
              >
                {page}
              </button>
            );
          })}
          {currPage < totalPages - 1 ? (
            <button
              className="border text-gray-500 px-2 py-1 rounded-r-lg hover:bg-gray-200"
              onClick={() => {
                onPageChange(currPage + 1);
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
