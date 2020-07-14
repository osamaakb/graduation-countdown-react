import React from "react";
import "./styles.css";
import DateCountdown from "react-date-countdown-timer";
import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";

export default function App() {
  const { width, height } = useWindowSize();

  return (
    <div className="App">
      <Confetti width={width} height={height} numberOfPieces={100} />
      <img
        alt="bg-img"
        className="bg-img"
        src="https://i.imgur.com/tuQx4LI.jpg"
      />
      <div className="bg-color"> </div>
      <div className="container">
        <h1>Hello pathetic university student</h1>
        <span className="desc">This is how long you have left to graduate</span>
        <DateCountdown
          dateTo="July 25, 2020 11:00:00 UTC+03:00"
          callback={() => alert("Hello")}
        />
        <p>
          made with hate by{" "}
          <a href="https://github.com/osamaakb" target={"_blank"}>
            Osama
          </a>{" "}
          🖤
        </p>
      </div>
    </div>
  );
}
