import React from 'react'
import { useState } from 'react';
import './AgeSubmission.css'

const AgeSubmission = () => {

  const [year, setYear] = useState()
  const [month, setMonth] = useState()
  const [date, setDate] = useState()
  const [hour, setHour] = useState()
  const [age, setAge] = useState()

  const calculateAge = () => {
    const today = new Date()
    const birthYear = new Date(year)
    const birthMonth = new Date(month)
    const birthDate = new Date(date)
    const birthHour = new Date(hour)

    let age = today.getFullYear() - birthYear.getFullYear()
    const monthDiff = today.getMonth() - birthMonth.getMonth()

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    setAge(age);
    console.log(age)
  }

  return (
    <div>
      <section className='main container d-flex'>
        <div className='submission-form'>
          <form>
            <div className='input-field'>
              <input type='number' name='year' placeholder='YEAR' value={year} required />
              <input type='number' name='month' placeholder='MONTH' value={month} required />
              <input type='number' name='date' placeholder='DATE' value={date} required />
              <input type='number' name='hour' placeholder='HOUR' value={hour} required />
            </div>
            <div className='submission-button col-1 mx-auto'>
              <button className='btn btn-secondary' type='submit' name='submit' onClick={calculateAge}>SUBMIT</button>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}

export default AgeSubmission
