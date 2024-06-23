/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";
import PropTypes from "prop-types";

function PresetClock({ presetTime }) {
  const [time, setTime] = useState(presetTime);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => new Date(prevTime.getTime() + 1000));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  const secSpring = useSpring({ transform: `rotate(${seconds * 6}deg)` });
  const minSpring = useSpring({ transform: `rotate(${minutes * 6}deg)` });
  const hourSpring = useSpring({
    transform: `rotate(${hours * 30 + minutes / 2}deg)`,
  });

  return (
    <div
      style={{
        position: "relative",
        width: "200px",
        height: "200px",
        borderRadius: "50%",
        border: "1px solid black",
      }}
    >
      <animated.div
        style={{
          ...secSpring,
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "2px",
          height: "90px",
          backgroundColor: "red",
          transformOrigin: "bottom",
        }}
      />
      <animated.div
        style={{
          ...minSpring,
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "4px",
          height: "70px",
          backgroundColor: "black",
          transformOrigin: "bottom",
        }}
      />
      <animated.div
        style={{
          ...hourSpring,
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "6px",
          height: "50px",
          backgroundColor: "black",
          transformOrigin: "bottom",
        }}
      />
    </div>
  );
}

export default PresetClock;

PresetClock.propTypes = {
  presetTime: PropTypes.any,
};
