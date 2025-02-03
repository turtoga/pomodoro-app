import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Button from '../Button'
import Alarm from './alarm.mp3'

const TimerStyled = styled.div`
  h1 {
    margin: 0;
    font-size: 100px;
    text-align: center;
    -webkit-user-select: none;
  }
`

const ButtonsDiv = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
`

const Timer = ({ duracao }) => {
  const [time, setTimer] = useState(duracao || 25 * 60) //inSecond
  const [isRunning, setIsRunning] = useState(false)
  const [isIniciado, setIsIniciado] = useState(false)
  

  const alarm = new Audio(Alarm)
  alarm.volume = 0.2

  useEffect(() => {
    let timer
    if (isRunning) {
      timer = setInterval(() => {
        setTimer((prevTime) => {
          if(prevTime>0) {
            return prevTime > 0 ? prevTime - 1 : prevTime
          } else {
            alarm.play();
            return prevTime;
          }
        })
      }, 1000)
    }
    return () => clearInterval(timer)
  }, [isRunning, time])

  const timeFormat = (tempo) => {
    const min = Math.floor(tempo / 60) //asrredonda pra baixo
    const sec = time % 60

    return `${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')}`
  }

  const handleStart = () => {
    if (time > 0) {
      setIsIniciado(true)
      setIsRunning(true)
    }
  }

  const handleStop = () => {
    setIsRunning(false)
    if(!alarm.paused) {
      alarm.pause() // Stop the alarm when resetting
      alarm.currentTime = 0 // Reset the alarm to the start
    }
  }

  const handleReset = () => {
    setIsRunning(false)
    setIsIniciado(false)
    setTimer(duracao || 25 * 60)
    if(!alarm.paused) {
      alarm.pause() // Stop the alarm when resetting
      alarm.currentTime = 0 // Reset the alarm to the start
    }
  }

  const handleProx = () =>{
    setIsRunning(false)
    setIsIniciado(false)
    setTimer(duracao || 25 * 60)
  }

  return (
    <TimerStyled>
      <h1>{timeFormat(time)}</h1>
      <ButtonsDiv>
        {isRunning ? (
          <>
            {time>0? <Button handleClick={handleStop}>Pausar</Button>:""}
            <Button handleClick={handleReset}>Resetar</Button>
          </>
        ) : (
          <>
            <Button handleClick={handleStart}>{isIniciado ? 'Continuar' : 'Começar'}</Button>
            {isIniciado ? <Button handleClick={handleReset}>Resetar</Button> : ''}
            
          </>
        )}
      </ButtonsDiv>
    </TimerStyled>
  )
}

export default Timer
