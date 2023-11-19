import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../App.css";
import "./Style.css";

const AgeSubmission = () => {
  const navigate = useNavigate();

  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [hour, setHour] = useState("");

  const notify = () => {
    toast.error("⛔ Error, incorrect input!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const calculateAge = () => {
    const birthYear = parseInt(year);
    const birthMonth = parseInt(month);
    const birthDate = parseInt(day);
    const birthHour = parseInt(hour);

    if (
      isNaN(birthYear) ||
      isNaN(birthMonth) ||
      isNaN(birthDate) ||
      isNaN(birthHour) ||
      birthYear < 1900 ||
      birthYear > new Date().getFullYear() ||
      birthMonth < 0 ||
      birthMonth > 11 ||
      birthDate < 1 ||
      birthDate > 31 ||
      birthHour < 0 ||
      birthHour > 23
    ) {
      notify()
      console.log(
        "Invalid input. Please enter valid values for year, month, date, and hour."
      );
      return;
    }

    const birthDateObject = new Date(
      birthYear,
      birthMonth - 1,
      birthDate,
      birthHour
    );

    const today = new Date();

    console.log(today);

    const ageInMilliseconds = today - birthDateObject;

    const ageInSeconds = ageInMilliseconds / 1000;
    const ageInMinutes = ageInSeconds / 60;
    const ageInHours = ageInMinutes / 60;
    const ageInDays = ageInHours / 24;
    const ageInMonths = ageInDays / 30.44;
    const ageInYears = ageInMonths / 12;

    var millisecondsRemainder = ageInMilliseconds % 1000;
    var secondsRemainder = ageInSeconds % 60;
    var minutesRemainder = ageInMinutes % 60;
    var hoursRemainder = ageInHours % 60;
    var daysRemainder = ageInDays % 30.44;
    var monthsRemainder = ageInMonths % 12;
    var yearsRemainder = parseInt(ageInYears);

    const formattedAgeInMilliseconds = parseInt(millisecondsRemainder);
    const formattedAgeInSeconds = parseInt(secondsRemainder);
    const formattedAgeInMinutes = parseInt(minutesRemainder);
    const formattedAgeInHours = parseInt(hoursRemainder);
    const formattedAgeInDays = parseInt(daysRemainder);
    const formattedAgeInMonths = parseInt(monthsRemainder);
    const formattedAgeInYears = parseInt(yearsRemainder);

    navigate("/output", {
      state: {
        time: {
          ms: formattedAgeInMilliseconds,
          seconds: formattedAgeInSeconds,
          minutes: formattedAgeInMinutes,
          hour: formattedAgeInHours,
          month: formattedAgeInMonths,
          year: formattedAgeInYears,
          day: formattedAgeInDays,
        },
      },
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <section className="main container d-flex">
        <div className="submission-form d-flex">
          <form onSubmit={handleSubmit}>
            <div className="input-field">
              <input
                type="number"
                name="hour"
                placeholder="HOUR"
                value={hour}
                onChange={(e) => setHour(e.target.value)}
                required
              />
              <input
                type="number"
                name="date"
                placeholder="DATE"
                value={day}
                onChange={(e) => setDay(e.target.value)}
                required
              />
              <input
                type="number"
                name="month"
                placeholder="MONTH"
                value={month}
                onChange={(e) => setMonth(e.target.value)}
                required
              />
              <input
                type="number"
                name="year"
                placeholder="YEAR"
                inputMode="numeric"
                onChange={(e) => setYear(e.target.value)}
                required
              />
            </div>
            <div className="submission-button col-1 mx-auto">
              <button
                className="btn btn-secondary"
                type="submit"
                name="submit"
                onClick={calculateAge}
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </section>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}

export default AgeSubmission