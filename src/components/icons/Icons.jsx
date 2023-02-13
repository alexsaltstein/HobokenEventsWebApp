import React from "react";
/** @jsxImportSource @emotion/react */
import "twin.macro";

export function SubmitButton(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      tw="w-6 h-6"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}

export function AboutButton(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      tw="w-6 h-6"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
      />
    </svg>
  );
}

export function ContactUsButton(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      tw="w-6 h-6"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
      />
    </svg>
  );
}

export function SignInButton(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      tw="w-6 h-6"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
      />
    </svg>
  );
}

export function SignOutButton(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      tw="w-6 h-6"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
      />
    </svg>
  );
}

export const PhoneIcon = (props) => (
  <svg
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    tw="w-6 h-6"
    {...props}
  >
    <title>Phone number</title>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M16 3h5m0 0v5m0-5l-6 6M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z"
    />
  </svg>
);

export const WebsiteIcon = (props) => (
  <svg
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    tw="w-6 h-6"
    {...props}
  >
    <title>Go to website</title>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

export const DirectionsIcon = (props) => (
  <svg
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    tw="w-6 h-6"
    {...props}
  >
    <title>Get directions</title>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
    />
  </svg>
);

export const ModerateIcon = (props) => (
  <svg
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    tw="w-6 h-6"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
    ></path>
  </svg>
);

export const CalendarIcon = (props) => (
  <svg
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    tw="w-6 h-6"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
    />
  </svg>
);

export const TimerIcon = (props) => (
  <svg
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    tw="w-6 h-6"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
    ></path>
  </svg>
);

export const ResetIcon = (props) => (
  <svg
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    tw="w-6 h-6"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
    ></path>
  </svg>
);

export const PlayIcon = (props) => (
  <svg
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    tw="w-6 h-6"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
    ></path>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    ></path>
  </svg>
);

export const PauseIcon = (props) => (
  <svg
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    tw="w-6 h-6"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"
    ></path>
  </svg>
);

export const LocationIcon = (props) => (
  <svg
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    tw="w-6 h-6"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
    ></path>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
    ></path>
  </svg>
);

export const CautionIcon = (props) => (
  <svg
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    tw="w-6 h-6"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
    ></path>
  </svg>
);

export const XIcon = (props) => (
  <svg
    aria-hidden="true"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    tw="w-6 h-6"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
      clipRule="evenodd"
    ></path>
  </svg>
);

export const RightArrowIcon = (props) => (
  <svg
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    tw="w-6 h-6"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M14 5l7 7m0 0l-7 7m7-7H3"
    ></path>
  </svg>
);

export const ExternalLinkIcon = (props) => (
  <svg
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    tw="w-6 h-6"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
    ></path>
  </svg>
);

export const WordmarkLogo = (props) => (
  <svg
    width="405"
    height="48"
    viewBox="0 0 405 48"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M0 0.0999985H12.53V15.35H24.39V0.0999985H36.97V38.4H24.39V23.37H12.53V38.4H0V0.0999985Z" />
    <path d="M50.05 37.29C47.77 36.25 45.99 34.79 44.73 32.89C43.47 31 42.84 28.85 42.84 26.43V10.51H54.31V26.26C54.31 27.48 54.65 28.44 55.34 29.13C56.03 29.82 56.89 30.16 57.93 30.16C58.97 30.16 59.76 29.82 60.41 29.13C61.06 28.44 61.38 27.49 61.38 26.26V10.51H72.63V26.43C72.63 28.88 72.01 31.04 70.76 32.92C69.52 34.79 67.78 36.25 65.55 37.29C63.32 38.33 60.76 38.85 57.87 38.85C54.98 38.85 52.33 38.33 50.05 37.29Z" />
    <path d="M82.69 36.85C80.63 35.51 79.01 33.74 77.82 31.53C76.63 29.32 76.04 26.97 76.04 24.49C76.04 21.86 76.66 19.43 77.91 17.23C79.15 15.02 80.82 13.29 82.92 12.02C85.02 10.76 87.25 10.13 89.63 10.13C91.78 10.13 93.61 10.58 95.11 11.47C96.61 12.36 97.83 13.79 98.76 15.76V1.73L110.51 0V38.41H98.76V33.23C97.02 36.98 93.95 38.85 89.57 38.85C87.05 38.85 84.76 38.18 82.69 36.85ZM97.16 28.39C98.22 27.28 98.75 25.98 98.75 24.49V24.27C98.75 22.82 98.19 21.57 97.08 20.51C95.97 19.45 94.69 18.92 93.24 18.92C91.68 18.92 90.37 19.47 89.32 20.56C88.26 21.66 87.73 22.96 87.73 24.48C87.73 26 88.28 27.36 89.37 28.43C90.47 29.51 91.75 30.04 93.24 30.04C94.8 30.04 96.11 29.48 97.17 28.37L97.16 28.39Z" />
    <path d="M115.37 37.13L116.65 30.51C119.32 31.48 121.92 31.96 124.44 31.96C126.3 31.96 127.22 31.44 127.22 30.4C127.22 29.88 126.95 29.45 126.41 29.12C125.87 28.79 124.86 28.49 123.37 28.23C120.29 27.64 118.07 26.63 116.72 25.22C115.36 23.81 114.69 21.81 114.69 19.21C114.84 16.28 116.01 14.03 118.2 12.47C120.39 10.91 123.38 10.13 127.16 10.13C129.09 10.13 130.75 10.25 132.14 10.49C133.53 10.73 134.8 11.13 135.95 11.69L134.78 18.31C133.7 17.9 132.53 17.59 131.25 17.36C129.97 17.14 128.9 17.03 128.05 17.03C126.79 17.03 125.92 17.16 125.43 17.42C124.94 17.68 124.71 18.03 124.71 18.48C124.71 19.3 125.64 19.87 127.5 20.21C130.88 20.8 133.4 21.84 135.07 23.33C136.74 24.82 137.58 26.84 137.58 29.4C137.58 32.33 136.55 34.64 134.49 36.33C132.43 38.02 129.47 38.86 125.61 38.86C121.75 38.86 118.3 38.28 115.37 37.13Z" />
    <path d="M147.44 37.01C145.01 35.79 143.12 34.09 141.76 31.92C140.4 29.75 139.73 27.25 139.73 24.43C139.73 21.61 140.42 19.11 141.79 16.94C143.16 14.77 145.07 13.09 147.5 11.9C149.93 10.71 152.71 10.12 155.82 10.12C158.93 10.12 161.77 10.72 164.2 11.93C166.63 13.14 168.51 14.82 169.85 16.97C171.19 19.12 171.85 21.61 171.85 24.43C171.85 27.25 171.17 29.8 169.82 31.97C168.47 34.14 166.57 35.83 164.14 37.04C161.71 38.25 158.92 38.85 155.76 38.85C152.6 38.85 149.87 38.24 147.44 37.01ZM159.63 28.8C160.61 27.67 161.11 26.21 161.11 24.43C161.11 22.65 160.62 21.19 159.63 20.06C158.65 18.93 157.39 18.36 155.87 18.36C154.35 18.36 153.1 18.93 152.11 20.06C151.13 21.19 150.64 22.65 150.64 24.43C150.64 26.21 151.13 27.67 152.11 28.8C153.09 29.93 154.35 30.5 155.87 30.5C157.39 30.5 158.65 29.93 159.63 28.8Z" />
    <path d="M175.57 10.9H186.76V16.58C188.91 12.28 192.33 10.12 197 10.12C200.56 10.12 203.35 11.39 205.38 13.93C207.41 16.47 208.42 19.99 208.42 24.48V38.4H196.73V23.31C196.73 21.72 196.39 20.49 195.7 19.64C195.01 18.79 194.06 18.36 192.83 18.36C191.94 18.36 191.07 18.65 190.21 19.22C189.36 19.8 188.66 20.62 188.12 21.7C187.58 22.78 187.31 24 187.31 25.37V38.4H175.56V10.9H175.57Z" />
    <path d="M225.06 0.0999985H237.59V15.35H249.45V0.0999985H262.03V38.4H249.45V23.37H237.59V38.4H225.06V0.0999985Z" />
    <path d="M273.58 36.93C271.48 35.65 269.8 33.91 268.54 31.7C267.28 29.49 266.65 27.03 266.65 24.32C266.65 21.61 267.28 19.23 268.54 17.06C269.8 14.89 271.49 13.19 273.61 11.97C275.73 10.75 277.97 10.13 280.35 10.13C282.28 10.13 284.07 10.67 285.72 11.74C287.37 12.82 288.62 14.43 289.48 16.58V10.12H301.17V38.4H289.48V33.22C287.62 36.97 284.58 38.84 280.35 38.84C277.94 38.84 275.68 38.2 273.58 36.92V36.93ZM287.78 28.47C288.84 27.41 289.4 26.16 289.48 24.71V24.26C289.41 22.78 288.82 21.51 287.73 20.47C286.64 19.43 285.38 18.91 283.97 18.91C282.41 18.91 281.09 19.46 279.99 20.55C278.9 21.65 278.35 22.95 278.35 24.47C278.35 25.99 278.91 27.35 280.02 28.42C281.13 29.5 282.45 30.03 283.97 30.03C285.49 30.03 286.73 29.5 287.78 28.44V28.47Z" />
    <path d="M306.52 10.9H318.27V15.74C320.05 11.99 323.07 10.12 327.34 10.12C329.82 10.12 332.12 10.74 334.22 11.98C336.32 13.22 337.97 14.94 339.18 17.13C340.39 19.32 340.99 21.77 340.99 24.48C340.99 27.19 340.37 29.64 339.12 31.83C337.88 34.02 336.21 35.74 334.11 36.98C332.01 38.22 329.78 38.85 327.4 38.85C323.17 38.85 320.13 36.98 318.27 33.23V45.65L306.52 47.88V10.92V10.9ZM327.73 28.38C328.81 27.27 329.35 25.97 329.35 24.48C329.35 22.92 328.8 21.6 327.71 20.53C326.61 19.45 325.33 18.92 323.84 18.92C322.35 18.92 321.02 19.45 319.94 20.51C318.86 21.57 318.32 22.82 318.32 24.27V24.49C318.32 26.05 318.87 27.37 319.96 28.44C321.05 29.52 322.34 30.05 323.83 30.05C325.32 30.05 326.65 29.49 327.73 28.38Z" />
    <path d="M344.9 10.9H356.65V15.74C358.43 11.99 361.45 10.12 365.72 10.12C368.2 10.12 370.5 10.74 372.6 11.98C374.7 13.22 376.35 14.94 377.56 17.13C378.77 19.32 379.37 21.77 379.37 24.48C379.37 27.19 378.75 29.64 377.5 31.83C376.26 34.02 374.59 35.74 372.49 36.98C370.39 38.22 368.16 38.85 365.78 38.85C361.55 38.85 358.51 36.98 356.65 33.23V45.65L344.9 47.88V10.92V10.9ZM366.11 28.38C367.19 27.27 367.73 25.97 367.73 24.48C367.73 22.92 367.18 21.6 366.09 20.53C364.99 19.45 363.71 18.92 362.22 18.92C360.73 18.92 359.4 19.45 358.32 20.51C357.24 21.57 356.7 22.82 356.7 24.27V24.49C356.7 26.05 357.25 27.37 358.34 28.44C359.43 29.52 360.72 30.05 362.21 30.05C363.7 30.05 365.03 29.49 366.11 28.38Z" />
    <path d="M382.4 37.13L383.68 30.51C386.35 31.48 388.95 31.96 391.47 31.96C393.33 31.96 394.25 31.44 394.25 30.4C394.25 29.88 393.98 29.45 393.44 29.12C392.9 28.79 391.89 28.49 390.4 28.23C387.32 27.64 385.1 26.63 383.75 25.22C382.39 23.81 381.72 21.81 381.72 19.21C381.87 16.28 383.04 14.03 385.23 12.47C387.42 10.91 390.41 10.13 394.19 10.13C396.12 10.13 397.78 10.25 399.17 10.49C400.56 10.73 401.83 11.13 402.98 11.69L401.81 18.31C400.73 17.9 399.56 17.59 398.28 17.36C397 17.14 395.93 17.03 395.08 17.03C393.82 17.03 392.95 17.16 392.46 17.42C391.97 17.68 391.74 18.03 391.74 18.48C391.74 19.3 392.67 19.87 394.53 20.21C397.91 20.8 400.43 21.84 402.1 23.33C403.77 24.82 404.61 26.84 404.61 29.4C404.61 32.33 403.58 34.64 401.52 36.33C399.46 38.02 396.5 38.86 392.64 38.86C388.78 38.86 385.33 38.28 382.4 37.13Z" />
  </svg>
);

export const IconLogoBlue = (props) => (
  <svg
    width="139"
    height="138"
    viewBox="0 0 139 138"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M69.7924 0.570007H68.7524C30.8024 0.570007 0.04245 31.33 0.04245 69.28C0.04245 107.23 30.8024 137.99 68.7524 137.99H69.7924C107.742 137.99 138.502 107.23 138.502 69.28C138.502 31.33 107.742 0.570007 69.7924 0.570007ZM90.6925 27.3L94.3524 20.98C94.9025 20.02 96.1325 19.7 97.0825 20.25C98.0324 20.8 98.3624 22.03 97.8124 22.98L94.1525 29.3C93.7824 29.94 93.1124 30.3 92.4224 30.3C92.0825 30.3 91.7424 30.21 91.4224 30.03C90.4624 29.48 90.1424 28.25 90.6925 27.3ZM67.7124 15.12C67.7124 14.02 68.6124 13.12 69.7124 13.12C70.8124 13.12 71.7124 14.02 71.7124 15.12V22.39C71.7124 23.49 70.8124 24.39 69.7124 24.39C68.6124 24.39 67.7124 23.49 67.7124 22.39V15.12ZM41.4624 20.25C42.4224 19.7 43.6425 20.03 44.1925 20.98L47.8424 27.3C48.3924 28.26 48.0625 29.48 47.1124 30.03C46.7924 30.21 46.4524 30.3 46.1124 30.3C45.4225 30.3 44.7524 29.94 44.3825 29.3L40.7324 22.98C40.1824 22.02 40.5124 20.8 41.4624 20.25ZM12.7125 68.84C12.7125 67.74 13.6124 66.84 14.7125 66.84H22.0324C23.1325 66.84 24.0324 67.74 24.0324 68.84C24.0324 69.94 23.1325 70.84 22.0324 70.84H14.7125C13.6124 70.84 12.7125 69.94 12.7125 68.84ZM29.1724 94.23L22.8325 97.89C22.5125 98.07 22.1725 98.16 21.8325 98.16C21.1425 98.16 20.4725 97.8 20.1024 97.16C19.5525 96.2 19.8825 94.98 20.8325 94.43L27.1724 90.77C28.1324 90.22 29.3525 90.55 29.9025 91.5C30.4524 92.45 30.1224 93.68 29.1724 94.23ZM30.3524 46.31C29.9824 46.95 29.3125 47.31 28.6224 47.31C28.2824 47.31 27.9424 47.22 27.6224 47.04L21.2824 43.37C20.3225 42.82 20.0025 41.59 20.5525 40.64C21.1024 39.68 22.3324 39.36 23.2824 39.91L29.6224 43.58C30.5824 44.13 30.9024 45.36 30.3524 46.31ZM47.0924 110.83L43.4324 117.16C43.0625 117.8 42.3924 118.16 41.7024 118.16C41.3624 118.16 41.0224 118.07 40.7024 117.89C39.7425 117.34 39.4225 116.11 39.9725 115.16L43.6325 108.83C44.1824 107.87 45.4025 107.54 46.3624 108.1C47.3224 108.65 47.6424 109.88 47.0924 110.83ZM71.7124 123.45C71.7124 124.55 70.8124 125.45 69.7124 125.45C68.6124 125.45 67.7124 124.55 67.7124 123.45V116.17C67.7124 115.07 68.6124 114.17 69.7124 114.17C70.8124 114.17 71.7124 115.07 71.7124 116.17V123.45ZM82.7124 99.43L74.1824 97.16C72.7124 96.77 71.8325 95.26 72.2325 93.79L76.8524 76.45L59.9524 71.95L55.3325 89.29C54.9425 90.76 53.4324 91.64 51.9624 91.24L43.4324 88.97C41.9624 88.58 41.0824 87.07 41.4824 85.6L53.3325 41.09C53.7225 39.62 55.2324 38.74 56.7024 39.14L65.2325 41.41C66.7025 41.8 67.5825 43.31 67.1824 44.78L62.9025 60.85L79.8025 65.35L84.0825 49.28C84.4725 47.81 85.9825 46.93 87.4525 47.33L95.9825 49.6C97.4525 49.99 98.3325 51.5 97.9324 52.97L86.0825 97.48C85.6925 98.95 84.1824 99.83 82.7124 99.43ZM97.8425 117.89C97.5225 118.07 97.1824 118.16 96.8425 118.16C96.1525 118.16 95.4825 117.8 95.1124 117.16L91.4525 110.83C90.9025 109.87 91.2225 108.65 92.1824 108.1C93.1424 107.55 94.3624 107.87 94.9125 108.83L98.5724 115.16C99.1225 116.12 98.8025 117.34 97.8425 117.89ZM108.922 43.58L115.262 39.91C116.222 39.36 117.442 39.68 117.992 40.64C118.542 41.6 118.222 42.82 117.262 43.37L110.922 47.04C110.602 47.22 110.262 47.31 109.922 47.31C109.232 47.31 108.562 46.95 108.192 46.31C107.642 45.35 107.962 44.13 108.922 43.58ZM118.442 97.17C118.072 97.81 117.402 98.17 116.712 98.17C116.372 98.17 116.032 98.08 115.712 97.9L109.362 94.23C108.402 93.68 108.082 92.45 108.632 91.5C109.182 90.54 110.412 90.21 111.362 90.77L117.712 94.44C118.672 94.99 118.992 96.22 118.442 97.17ZM123.832 70.85H116.512C115.412 70.85 114.512 69.95 114.512 68.85C114.512 67.75 115.412 66.85 116.512 66.85H123.832C124.932 66.85 125.832 67.75 125.832 68.85C125.832 69.95 124.932 70.85 123.832 70.85Z"
      fill="#007bc7"
    />
  </svg>
);

export const IconLogoWhite = (props) => (
  <svg
    width="139"
    height="138"
    viewBox="0 0 139 138"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M70.1933 0.570007H69.1533C31.2033 0.570007 0.443268 31.33 0.443268 69.28C0.443268 107.23 31.2033 137.99 69.1533 137.99H70.1933C108.143 137.99 138.903 107.23 138.903 69.28C138.903 31.33 108.143 0.570007 70.1933 0.570007ZM91.0933 27.3L94.7533 20.98C95.3033 20.02 96.5333 19.7 97.4833 20.25C98.4333 20.8 98.7633 22.03 98.2133 22.98L94.5533 29.3C94.1833 29.94 93.5133 30.3 92.8233 30.3C92.4833 30.3 92.1433 30.21 91.8233 30.03C90.8633 29.48 90.5433 28.25 91.0933 27.3ZM68.1133 15.12C68.1133 14.02 69.0133 13.12 70.1133 13.12C71.2133 13.12 72.1133 14.02 72.1133 15.12V22.39C72.1133 23.49 71.2133 24.39 70.1133 24.39C69.0133 24.39 68.1133 23.49 68.1133 22.39V15.12ZM41.8633 20.25C42.8233 19.7 44.0433 20.03 44.5933 20.98L48.2433 27.3C48.7933 28.26 48.4633 29.48 47.5133 30.03C47.1933 30.21 46.8533 30.3 46.5133 30.3C45.8233 30.3 45.1533 29.94 44.7833 29.3L41.1333 22.98C40.5833 22.02 40.9133 20.8 41.8633 20.25ZM13.1133 68.84C13.1133 67.74 14.0133 66.84 15.1133 66.84H22.4333C23.5333 66.84 24.4333 67.74 24.4333 68.84C24.4333 69.94 23.5333 70.84 22.4333 70.84H15.1133C14.0133 70.84 13.1133 69.94 13.1133 68.84ZM29.5733 94.23L23.2333 97.89C22.9133 98.07 22.5733 98.16 22.2333 98.16C21.5433 98.16 20.8733 97.8 20.5033 97.16C19.9533 96.2 20.2833 94.98 21.2333 94.43L27.5733 90.77C28.5333 90.22 29.7533 90.55 30.3033 91.5C30.8533 92.45 30.5233 93.68 29.5733 94.23ZM30.7533 46.31C30.3833 46.95 29.7133 47.31 29.0233 47.31C28.6833 47.31 28.3433 47.22 28.0233 47.04L21.6833 43.37C20.7233 42.82 20.4033 41.59 20.9533 40.64C21.5033 39.68 22.7333 39.36 23.6833 39.91L30.0233 43.58C30.9833 44.13 31.3033 45.36 30.7533 46.31ZM47.4933 110.83L43.8333 117.16C43.4633 117.8 42.7933 118.16 42.1033 118.16C41.7633 118.16 41.4233 118.07 41.1033 117.89C40.1433 117.34 39.8233 116.11 40.3733 115.16L44.0333 108.83C44.5833 107.87 45.8033 107.54 46.7633 108.1C47.7233 108.65 48.0433 109.88 47.4933 110.83ZM72.1133 123.45C72.1133 124.55 71.2133 125.45 70.1133 125.45C69.0133 125.45 68.1133 124.55 68.1133 123.45V116.17C68.1133 115.07 69.0133 114.17 70.1133 114.17C71.2133 114.17 72.1133 115.07 72.1133 116.17V123.45ZM83.1133 99.43L74.5833 97.16C73.1133 96.77 72.2333 95.26 72.6333 93.79L77.2533 76.45L60.3533 71.95L55.7333 89.29C55.3433 90.76 53.8333 91.64 52.3633 91.24L43.8333 88.97C42.3633 88.58 41.4833 87.07 41.8833 85.6L53.7333 41.09C54.1233 39.62 55.6333 38.74 57.1033 39.14L65.6333 41.41C67.1033 41.8 67.9833 43.31 67.5833 44.78L63.3033 60.85L80.2033 65.35L84.4833 49.28C84.8733 47.81 86.3833 46.93 87.8533 47.33L96.3833 49.6C97.8533 49.99 98.7333 51.5 98.3333 52.97L86.4833 97.48C86.0933 98.95 84.5833 99.83 83.1133 99.43ZM98.2433 117.89C97.9233 118.07 97.5833 118.16 97.2433 118.16C96.5533 118.16 95.8833 117.8 95.5133 117.16L91.8533 110.83C91.3033 109.87 91.6233 108.65 92.5833 108.1C93.5433 107.55 94.7633 107.87 95.3133 108.83L98.9733 115.16C99.5233 116.12 99.2033 117.34 98.2433 117.89ZM109.323 43.58L115.663 39.91C116.623 39.36 117.843 39.68 118.393 40.64C118.943 41.6 118.623 42.82 117.663 43.37L111.323 47.04C111.003 47.22 110.663 47.31 110.323 47.31C109.633 47.31 108.963 46.95 108.593 46.31C108.043 45.35 108.363 44.13 109.323 43.58ZM118.843 97.17C118.473 97.81 117.803 98.17 117.113 98.17C116.773 98.17 116.433 98.08 116.113 97.9L109.763 94.23C108.803 93.68 108.483 92.45 109.033 91.5C109.583 90.54 110.813 90.21 111.763 90.77L118.113 94.44C119.073 94.99 119.393 96.22 118.843 97.17ZM124.233 70.85H116.913C115.813 70.85 114.913 69.95 114.913 68.85C114.913 67.75 115.813 66.85 116.913 66.85H124.233C125.333 66.85 126.233 67.75 126.233 68.85C126.233 69.95 125.333 70.85 124.233 70.85Z"
      fill="white"
    />
  </svg>
);

export const CheckIcon = (props) => (
  <svg
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    tw="w-6 h-6"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M5 13l4 4L19 7"
    ></path>
  </svg>
);

export const FilterIcon = (props) => (
  <svg
    aria-hidden="true"
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    tw="w-6 h-6"
    {...props}
  >
    <path d="M18.75 12.75h1.5a.75.75 0 000-1.5h-1.5a.75.75 0 000 1.5zM12 6a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 0112 6zM12 18a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 0112 18zM3.75 6.75h1.5a.75.75 0 100-1.5h-1.5a.75.75 0 000 1.5zM5.25 18.75h-1.5a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5zM3 12a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 013 12zM9 3.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5zM12.75 12a2.25 2.25 0 114.5 0 2.25 2.25 0 01-4.5 0zM9 15.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"></path>
  </svg>
);

export const ShareIcon = (props) => (
  <svg
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    tw="w-6 h-6"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M7.5 7.5h-.75A2.25 2.25 0 004.5 9.75v7.5a2.25 2.25 0 002.25 2.25h7.5a2.25 2.25 0 002.25-2.25v-7.5a2.25 2.25 0 00-2.25-2.25h-.75m0-3l-3-3m0 0l-3 3m3-3v11.25m6-2.25h.75a2.25 2.25 0 012.25 2.25v7.5a2.25 2.25 0 01-2.25 2.25h-7.5a2.25 2.25 0 01-2.25-2.25v-.75"
    ></path>
  </svg>
);

export const MapPinIcon = (props) => {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      stroke-width="1.5"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      tw="w-6 h-6"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
      ></path>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
      ></path>
    </svg>
  );
};
