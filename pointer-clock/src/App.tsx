import React, {FC, useEffect, useRef, useState} from 'react';
import axios from "axios";

import "./App.css"

const API = "http://worldtimeapi.org/api/timezone/Europe/Moscow"
const initialTime: TypeTime = ['00', '00', '00']

type TypeTime = string[]


export const App: FC = () => {
  const [currentTime, setCurrentTime] = useState<TypeTime>(initialTime)
  let refTime = useRef<TypeTime>(initialTime)
  refTime.current = currentTime

  const getCurrentTime = () => {
    axios.get(API).then(
      ({data}) => {
        setCurrentTime(data?.datetime.slice(11, 19).split(":"))
      }
    )
  }

  const rewriteTime = () => {
    let [hours, minutes, seconds] = refTime.current.map(el => Number(el))

    seconds++
    if (seconds > 60) {
      seconds = seconds % 60
      minutes++
    }
    if (minutes > 60) {
      minutes = minutes % 60
      hours++
    }

    if (hours > 12) {
      hours = hours % 12
    }

    setCurrentTime([
      `${(hours < 10) ? '0' : ''}${hours}`,
      `${(minutes < 10) ? '0' : ''}${minutes}`,
      `${(seconds < 10) ? '0' : ''}${seconds}`
    ])
    console.log([
      `${(hours < 10) ? '0' : ''}${hours}`,
      `${(minutes < 10) ? '0' : ''}${minutes}`,
      `${(seconds < 10) ? '0' : ''}${seconds}`
    ])
  }

  useEffect(() => {
    getCurrentTime()

    const timeInterval = setInterval(rewriteTime, 1000)

    return () => clearInterval(timeInterval)
  }, [])


  return (
    <div>
      <ul className="clock">
        <li
          className="sec"
          style={{transform: `rotate(${Number(currentTime[2])*6}deg)`}}
        ><div/></li>
        <li className="hour"></li>
        <li className="min"></li>
      </ul>
    </div>
  );
}

