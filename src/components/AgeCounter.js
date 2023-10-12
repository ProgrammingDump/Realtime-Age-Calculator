import React , { useState , useEffect} from 'react'
import { useLocation } from 'react-router-dom'
import './AgeSubmission.css'

export default function Output() {

  const location = useLocation()
  let { ageInMilliseconds , ageInSeconds , ageInMinutes , ageInHours , ageInDays , ageInMonths , ageInYears } = location.state

  const [ ms , setMs ] = useState(ageInMilliseconds)
  const [ seconds , setSeconds ] = useState(ageInSeconds)
  const [ minutes , setMinutes ]= useState(ageInMinutes)
  const [ hours , setHours ] = useState(ageInHours)
  const [ days , setDays ] = useState(ageInDays)
  const [ months , setMonths ] = useState(ageInMonths)
  const [ years , setYears ] = useState(ageInYears)


  useEffect(() => {

    
    let interval = setInterval( () => {
      
      //setMs( ms + 1000 )
      setSeconds ( seconds => seconds + 1)
      // if ( ms >= 1000 )
      // {
      //   setMs( ms => 0 )
      //   setSeconds( seconds => seconds + 1 )
      // }

      if ( seconds >= 60 )
      {
        setSeconds(0)
        setMinutes( minutes => minutes + 1 )
      }

      if (minutes >= 60 )
      {
        setMinutes(0)
        setHours(hours => hours + 1)
      }
      
      if ( hours >= 24 )
      {
        setHours(0)
        setDays(days => days + 1)
      }
      
      if ( days >= 30 )
      {
        setDays(0)
        setMonths(months => months + 1)
      }
      
      if ( months >= 12 )
      {
        setMonths(0)
        setYears(years => years + 1)
      }

        // Cleanup the interval on unmount
        return () => clearInterval(interval)

    } , 1000 )

  } , [] )

  console.log(location.state)

  return (
    <div className='counter d-flex'>
      {years} years {months} months {days} days {hours} hours {minutes} minutes {seconds} seconds {ms} milliseconds
    </div>
  )
}
