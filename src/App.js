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
        src="https://annapimenta.pl/wp-content/uploads/2019/09/Where_to_buy_an_engagement_ring_in_Cracow_photographer_surprise_proposal-9-1000x550.jpg"
      />
      <div className="bg-color"> </div>
      <div className="container">
        <h1>Hello Osama and Shosho</h1>
        <span className="desc">This is how long you have left to engage</span>
        <DateCountdown
          dateTo="September 18, 2020 16:00:00 UTC+03:00"
          callback={() => console.log("you did it")}
        />
        <p>
          made with love by
          <a href="https://github.com/osamaakb" target={"_blank"}>
            Osama
          </a>
          ❤️
        </p>
      </div>
    </div>
  );
}
