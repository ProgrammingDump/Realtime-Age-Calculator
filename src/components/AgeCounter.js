import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./AgeSubmission.css";

export default function Output() {
  const location = useLocation();
  let { time: data } = location.state;

  const [time, setTime] = useState({ ...data, ms: 0 });

  useEffect(() => {
    let interval = setInterval(() => {
      setTime((state) => {
        let s = state.seconds,
          ms = 1000,
          minute = state.minutes,
          hour = state.hour,
          day = state.day,
          year = state.year,
          month = state.month;

        if (state.ms >= 1000) {
          ms = 0;
          s++;
          console.log("value of s : " + s);
        }

        if (s >= 60) {
          s = 0;
          minute++;
        }

        if (minute > 60) {
          minute = 0;
          hour++;
        }

        if (hour > 24) {
          hour = 0;
          day++;
        }

        if (day > 30) {
          day = 0;
          month++;
        }

        if (month > 12) {
          month = 1;
          year++;
        }

        return {
          ms: ms,
          seconds: s,
          minutes: minute,
          month,
          hour,
          day,
          year,
        };
      });
    }, 1000);
  }, []);

  console.log(time);

  return (
    <div className="counter d-flex">
      {time.year} years {time.month} months {time.day} days {time.hour} hours{" "}
      {time.minutes} minutes {time.seconds} seconds {time.ms} milliseconds
      {/* {time.minutes} minutes {time.seconds} seconds {time.ms} milliseconds */}
    </div>
  );
}
