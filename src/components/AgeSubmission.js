import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./AgeSubmission.css";

const AgeSubmission = () => {
  const navigate = useNavigate();
  const location = useLocation();

  console.log("navigate:" + navigate)
  console.log("location:" + location)

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

  const [darkMode, setDarkMode] = useState(false);

  const darkModeClass = darkMode ? "dark-mode" : "";

  useEffect(() => {
    const darkModeState = window.localStorage.getItem('Dark Mode');
    if (darkModeState !== null) setDarkMode(JSON.parse(darkModeState));
  }, []);

  useEffect(() => {
    localStorage.setItem("DarkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((state) => !state);
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
      birthMonth,
      birthDate,
      birthHour
    );
    const today = new Date();

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

  const inputStyle = {
    backgroundColor: darkMode ? '#333' : '#fff',
    color: darkMode ? '#fff' : '#000',
  };

  return (
    <div>
      <section className="main container d-flex">
        <div className="submission-form d-flex">
          <form onSubmit={handleSubmit}>
            <div className="input-field">
              <input
                className= {`${darkModeClass} `}
                type="number"
                name="year"
                placeholder="YEAR"
                inputMode="numeric"
                onChange={(e) => setYear(e.target.value)}
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
                name="date"
                placeholder="DATE"
                value={day}
                onChange={(e) => setDay(e.target.value)}
                required
              />
              <input
                type="number"
                name="hour"
                placeholder="HOUR"
                value={hour}
                onChange={(e) => setHour(e.target.value)}
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