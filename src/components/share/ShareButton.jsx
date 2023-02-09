import React from "react";
import Sheet from "react-modal-sheet";
import { copyToClipboard } from "../../utils/common";
import {
  ClipboardIcon,
  MailIcon,
  ShareIcon,
  SMSIcon,
  XIcon,
} from "../icons/Icons";

const ShareMenu = ({ onDismiss, body }) => {
  return (
    <div className="flex flex-col min-w-[200px]">
      <button
        className="flex py-1 px-2 border-b gap-x-2"
        onClick={(event) => {
          event.preventDefault();
          copyToClipboard(window.location.href);
          onDismiss(event);
        }}
      >
        <ClipboardIcon />
        Copy to clipboard
      </button>
      <a
        href={`sms:&body=${body}`}
        target="_blank"
        rel="noreferrer"
        className="flex gap-x-2 py-1 px-2 border-b lg:hidden"
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <SMSIcon />
        Send a text
      </a>
      <a
        href={`mailto:?subject=Check out Hudson Happs!&body=${body}`}
        className="flex py-1 px-2 gap-x-2"
        target="_blank"
        rel="noreferrer"
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <MailIcon /> Send an email
      </a>
    </div>
  );
};

export const ShareButton = ({ onClick, body }) => {
  const [dropDownOpen, setDropDownOpen] = React.useState(false);
  const onDismiss = (e) => {
    if (e) {
      e.preventDefault();
    }
    setDropDownOpen(!dropDownOpen);
  };

  return (
    <>
      <button
        className="flex items-center text-gray-500 z-40 lg:text-sm"
        onClick={(event) => {
          event.preventDefault();
          if (onClick) {
            console.log("here");
            onClick();
          }
          onDismiss(event);
        }}
      >
        <ShareIcon className="mr-1 h-5" />
        Share
      </button>
      {dropDownOpen ? (
        <>
          <div className="hidden lg:flex flex-col z-40 absolute bg-white right-2 rounded-lg p-2 shadow-lg">
            <div className="flex w-full border-b-2 items-center">
              <button
                type="button"
                className="text-gray-400 text-sm p-1.5"
                onClick={onDismiss}
              >
                <XIcon />
                <span className="sr-only">Close Bottomsheet</span>
              </button>
              <h1 className="font-bold">Share</h1>
            </div>
            <ShareMenu body={body} onDismiss={onDismiss} />
          </div>
          <Sheet
            className="lg:hidden flex"
            isOpen={dropDownOpen}
            onClose={() => {
              onDismiss();
            }}
            detent="content-height"
          >
            <Sheet.Container>
              <Sheet.Header>
                <div className="flex flex-1 w-full bg-transparent rounded-lg border-b-2 items-center justify-center">
                  <button
                    type="button"
                    className="fixed left-0 text-gray-400 text-sm p-1.5"
                    onClick={onDismiss}
                  >
                    <XIcon />
                    <span className="sr-only">Close Bottomsheet</span>
                  </button>
                  <div className="text-lg font-bold">
                    <h1>Share</h1>
                  </div>
                </div>
              </Sheet.Header>
              <Sheet.Content>
                <ShareMenu body={body} onDismiss={onDismiss} />
              </Sheet.Content>
            </Sheet.Container>
            <Sheet.Backdrop onClick={onDismiss} />
          </Sheet>
        </>
      ) : null}
    </>
  );
};
