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
          ms = state.ms ,
          minute = state.minutes,
          hour = state.hour,
          day = state.day,
          year = state.year,
          month = state.month;

          ms++


        if (state.ms >= 999) {
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
    }, 1);
  }, []);

  console.log(time);

  return (
    <div className="counter d-flex">
      <span>
      {time.year}.{time.month}{time.day}{time.hour}
      {time.minutes}{time.seconds}
      </span>
      <span style={{'minWidth':'150px'}}>{time.ms}</span> 
    </div>
  );
}
