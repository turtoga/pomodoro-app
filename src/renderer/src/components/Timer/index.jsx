import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Button from '../Button'
import Alarm from './alarm.mp3'

const TimerStyled = styled.div`
  h1 {
    margin: 0;
    font-size: clamp(100px, 20vw, 150px);
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

  

  const duracaoFormat = (min) => {
    return Math.floor(min*60)
  }

  const [time, setTimer] = useState(() => duracaoFormat(duracao)) //inSecond
  const [isRunning, setIsRunning] = useState(false)
  const [isIniciado, setIsIniciado] = useState(false)
  
  

  const alarm = new Audio(Alarm)
  alarm.volume = 0.2

  

  useEffect(() => {
    setTimer(duracaoFormat(duracao)); 
  }, [duracao]);

  useEffect(() => {
    let timer
    if (isRunning) {
      timer = setInterval(() => {
        setTimer((prevTime) => {
          if(prevTime>0) {
            return prevTime - 1 
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
    const hour = Math.floor(tempo/3600)
    const min = Math.floor(( tempo%3600 )/ 60) 
    const sec = time % 60

    const hora = hour>0?`${String(hour)}:`:``

    return `${hora}${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')}`
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
      alarm.pause() 
      alarm.currentTime = 0 
    }
  }

  const handleReset = () => {
    setIsRunning(false)
    setIsIniciado(false)
    setTimer(duracao*60)
    if(!alarm.paused) {
      alarm.pause() 
      alarm.currentTime = 0 
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
            {time>0? <Button clamp={true} handleClick={handleStop}>Pausar</Button>:""}
            <Button clamp={true} handleClick={handleReset}>Resetar</Button>
          </>
        ) : (
          <>
            <Button clamp={true} handleClick={handleStart}>{isIniciado ? 'Continuar' : 'Começar'}</Button>
            {isIniciado ? <Button clamp={true} handleClick={handleReset}>Resetar</Button> : ''}
            
          </>
        )}
      </ButtonsDiv>
    </TimerStyled>
  )
}

export default Timer
