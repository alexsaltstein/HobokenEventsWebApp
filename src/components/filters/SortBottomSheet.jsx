import React from "react";
import Sheet from "react-modal-sheet";
import RadioButton from "./RadioButton";
import { XIcon } from "../icons/Icons";

// Waiting on sort to be implemented
export default function SortBottomSheet({
  isOpen,
  setOpen,
}) {
  return (
    <>
      <Sheet
        isOpen={isOpen}
        onClose={() => setOpen(false)}
        detent="content-height"
      >
        <Sheet.Container>
          <Sheet.Header>
            <div className="flex">
              <button
                type="button"
                className="fixed text-gray-400 bg-transparent rounded-lg text-sm p-1.5 mt-2 mx-6 inline-flex items-center z-20"
                onClick={() => setOpen(false)}
              >
                <XIcon />
                <span className="sr-only">Close Bottomsheet</span>
              </button>
              <div className="fixed flex h-12 text-lg justify-center items-center  mb-2 font-bold w-full border-b-2 z-10 bg-white rounded">
                <h1>Sort results by</h1>
              </div>
            </div>
          </Sheet.Header>
          <Sheet.Content>
            <form className="text-lg mt-14 overflow-y-scroll">
              <RadioButton
                text={"Newest"}
                checked={null}
                onClick={() =>
                    null
                }
              />
                <RadioButton
                text={"Alphabetical"}
                checked={true}
                onClick={() =>
                    null
                }
              />
                <RadioButton
                text={"Proximity"}
                checked={null}
                onClick={() =>
                    null
                }
                />
            </form>
          </Sheet.Content>
          <div className="flex mt-20 w-full">
            <div className="fixed justify-end flex bottom-6 h-12 w-full border-t-2 bg-white z-10">
              <button
                className="inline-flex justify-center items-center relative w-40 h-10 bg-button-blue border-button-blue text-white my-4 mx-4 text-sm font-semibold rounded"
                onClick={() => setOpen(false)}
              >
                Sort Results
              </button>
            </div>
          </div>
        </Sheet.Container>
        <Sheet.Backdrop onClick={() => setOpen(false)} />
      </Sheet>
    </>
  );
}
