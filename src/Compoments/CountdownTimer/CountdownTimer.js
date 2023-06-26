import React, { useState } from 'react'
import './CountdownTimer.css'

const CountdownTimer = () => {

    const defauttRemainingTime = {
        seconds: '00',
        minutes: '00',
        hours: '00',
        days: '00'
    }

    const [remainingTime, setRemainingTime] = useState(defauttRemainingTime)

    return (
        <div className='countdown-timer'>
            <span>{remainingTime.days}</span>
            <span>days</span>
            <span>{remainingTime.hours}</span>
            <span>hours</span>
            <span>{remainingTime.minutes}</span>
            <span>minutes</span>
            <span>{remainingTime.seconds}</span>
            <span>seconds</span>
        </div>
    )
}

export default CountdownTimer