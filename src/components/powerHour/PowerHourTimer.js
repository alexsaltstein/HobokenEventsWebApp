import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import { PauseIcon, PlayIcon, ResetIcon } from "../icons/Icons";

const ONE_HOUR_IN_SECONDS = 3600;
const formatTime = (timeVal) => {
  if (timeVal <= 9) {
    return `${0}${timeVal}`;
  }
  return timeVal;
};

export const PowerHourTimer = () => {
  const confettiTop = React.useRef();
  const confettiBottom = React.useRef();
  const [paused, setPaused] = React.useState(true);
  const [secondsLeft, setSecondsLeft] = React.useState(ONE_HOUR_IN_SECONDS);

  React.useEffect(() => {
    // if the timer is paused no need to continue counting
    const interval = !paused
      ? setInterval(() => {
          setSecondsLeft((secondsLeft) => {
            if (secondsLeft <= 0) {
              return 0;
            }

            return secondsLeft - 1;
          });
        }, 1000)
      : null;

    // cleanup the interval on unload
    return () => clearInterval(interval);
  }, [paused]);

  const timerParts = [
    // hours
    Math.floor(secondsLeft / ONE_HOUR_IN_SECONDS),
    // minutes
    Math.floor((secondsLeft % ONE_HOUR_IN_SECONDS) / 60),
    // seconds
    Math.floor(secondsLeft % 60),
  ];

  const seconds = timerParts[2];

  if (seconds === 0 && timerParts[0] === 0) {
    // fire the animation and sound
    const shots = new Audio("/audio/shots.mp3");
    shots.play();
    if (confettiTop.current && confettiBottom.current) {
      confettiTop.current.play();
      confettiBottom.current.play();
    }
  }

  // This function calculates the border color
  // based upon the amount of seconds green at 59 -> yellow 30 -> red 0
  const renderBorderColor = () => {
    const half = seconds - 30;
    const greenToYellowPercentage = half / 30;
    let green = 255;
    let red = Math.floor(255 - 255 * greenToYellowPercentage);
    if (red >= 255) {
      red = 255;
      const yellowToRedPercentage = seconds / 30;
      green = Math.floor(255 * yellowToRedPercentage);
    }
    const color = `rgb(${red},${green},00)`;
    return color;
  };

  const borderColor = renderBorderColor();

  return (
    <>
      <div className="absolute top-0 flex flex-col">
        <Player
          style={{ height: "50vh" }}
          src="/animations/confetti.json"
          ref={confettiTop}
        />
        <div className="rotate-180">
          <Player
            style={{ height: "50vh" }}
            src="/animations/confetti.json"
            ref={confettiBottom}
          />
        </div>
      </div>
      <div className="flex z-10 items-center w-3/4 flex-col md:w-[350px] space-y-3 bg-white rounded shadow-lg p-10">
        <h3 className="text-xl md:text-3xl font-bold">Power hour timer</h3>
        <h4 className="text-lg md:text-xl text-center opacity-70 font-semibold">
          For every minute that passes take a shot of whatever liquid you are
          playing with
        </h4>
        <div
          className="flex w-1/2 items-center justify-center"
          style={{
            borderBottom: `3px solid ${borderColor}`,
          }}
        >
          {timerParts.map((time, index) => (
            <div key={`timer-${index}`} className="text-2xl">
              {formatTime(time)}
              {index !== timerParts.length - 1 ? ":" : ""}
            </div>
          ))}
        </div>
        <div className="flex flex-col md:flex-row md:space-x-2 md:space-y-0 space-y-2 w-full pt-4">
          <button
            className="flex items-center justify-center w-full bg-button-blue border-button-blue text-white text-lg py-2 px-2 md:px-4 font-semibold rounded"
            onClick={() => {
              setSecondsLeft(ONE_HOUR_IN_SECONDS);
            }}
          >
            <ResetIcon params={"mr-2"} />
            Reset
          </button>
          <button
            className="flex items-center justify-center w-full bg-button-blue border-button-blue text-white text-lg py-2 md:px-4 font-semibold rounded"
            onClick={() => {
              setPaused(!paused);
            }}
          >
            {paused ? (
              <PlayIcon params={"mr-2"} />
            ) : (
              <PauseIcon params={"mr-2"} />
            )}
            {paused ? "Play" : "Pause"}
          </button>
        </div>
      </div>
    </>
  );
};
