import React, { useState } from "react";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import "./AgeSubmission.css";

const AgeSubmission = () => {
  const navigate = useNavigate();

  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [hour, setHour] = useState("");
  // const [age, setAge] = useState('')
  // const [ageInHours, setAgeInHours] = useState(null)
  // const [ageInDays, setAgeInDays] = useState(null)
  // const [ageInMonths, setAgeInMonths] = useState(null)
  // const [ageInYears, setAgeInYears] = useState(null)

  const calculateAge = () => {
    //   const birthYear = parseInt(year)
    //   const birthMonth = parseInt(month)
    //   const birthDate = parseInt(day)
    //   const birthHour = parseInt(hour)

    //   if (
    //     isNaN(birthYear) || isNaN(birthMonth) || isNaN(birthDate) || isNaN(birthHour) ||
    //     birthYear < 1900 || birthYear > new Date().getFullYear() ||
    //     birthMonth < 0 || birthMonth > 11 ||
    //     birthDate < 1 || birthDate > 31 ||
    //     birthHour < 0 || birthHour > 23
    //   ) {
    //     console.log("Invalid input. Please enter valid values for year, month, date, and hour.");
    //     return;
    //   }

    //   const birthDateObject = new Date(birthYear, birthMonth, birthDate, birthHour);
    //   const today = new Date();

    //   const ageInMilliseconds = today - birthDateObject;

    //   setAge(ageInMilliseconds)

    //   const ageInSeconds = ageInMilliseconds / 1000
    //   const ageInMinutes = ageInSeconds / 60
    //   const ageInHours = ageInMinutes / 60
    //   const ageInDays = ageInHours / 24
    //   const ageInMonths = ageInDays / 30.44
    //   const ageInYears = ageInMonths / 12

    //   var millisecondsRemainder = ageInMilliseconds % 1000
    //   var secondsRemainder = ageInSeconds % 60
    //   var minutesRemainder = ageInMinutes % 60
    //   var hoursRemainder = ageInHours % 60
    //   var daysRemainder = ageInDays % 30.44
    //   var monthsRemainder = ageInMonths % 12
    //   var yearsRemainder = parseInt(ageInYears)

    //   const formattedAgeInMilliseconds = parseInt(millisecondsRemainder)
    //   const formattedAgeInSeconds = parseInt(secondsRemainder)
    //   const formattedAgeInMinutes = parseInt(minutesRemainder)
    //   const formattedAgeInHours = parseInt(hoursRemainder)
    //   const formattedAgeInDays = parseInt(daysRemainder)
    //   const formattedAgeInMonths = parseInt(monthsRemainder)
    //   const formattedAgeInYears = parseInt(yearsRemainder)

    //   setAgeInHours(formattedAgeInHours)
    //   setAgeInDays(formattedAgeInDays)
    //   setAgeInMonths(formattedAgeInMonths)
    //   setAgeInYears(formattedAgeInYears)

    //   console.log(ageInHours, ageInDays, ageInMonths)
    const ageDateTime = moment(`${year}-${month}-${day} ${hour}`)
    console.log(ageDateTime)
    navigate("/output", {
      state: { ageDateTime: moment(`${year}-${month}-${day} ${hour}`) },
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
    </div>
  );
};

export default AgeSubmission;
