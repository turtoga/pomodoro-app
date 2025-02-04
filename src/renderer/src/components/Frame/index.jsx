import React, { useState } from 'react'
import styled from 'styled-components'
import { BsX, BsDashLg, BsSquare,BsPinAngle, BsPinAngleFill, BsGear,BsGearFill } from "react-icons/bs";
import Popover from '../Popover';

const FrameStyle = styled.div`
  width: 100%;
  position: fixed;
  background-color: #5CB05F;
  -webkit-app-region: drag;
  justify-content: end;
  display: flex;
  justify-content: space-between;
  border-bottom: 2px #000 solid;

  button {
    background-color: transparent;
    border: none;
    padding: 8px 12px;
    transition: all 0.1s;
    cursor: pointer;
    -webkit-app-region: no-drag;
  }

  button:hover {
    background-color: #81cc84;
  }
`

const BotoesDir = styled.div`
  -webkit-app-region: no-drag;
  display: flex;

  button:hover {
    background-color: #81cc84;
  }

  button:last-child:hover {
    background-color: #d41e1edd; 
  }


`

const BotoesLeft = styled.div`
  display: flex;
`



const Frame = ({handleSalvar}) => {

  const [pinned, setPinned] = useState(false)
  const [isPopActive, setIsPopActive] = useState(false)
  const [isMaximize, setIsMaximize] = useState(false)
  

  const handleClose = () => {
    window.electron.ipcRenderer.send("close-window")
  }

  const handleMinimize = () => {
    window.electron.ipcRenderer.send("minimize-window")
  }

  const handleMaximize = () => {
    if(!isMaximize) {
      setIsMaximize(true)
      window.electron.ipcRenderer.send("maximize-window")
    } else {
      setIsMaximize(false)
      window.electron.ipcRenderer.send("restore-window")
    }
    
  }

  const handlePin = () => {
    window.electron.ipcRenderer.send("pin-window")
    setPinned(!pinned)
  }


  return (
    <>
      <FrameStyle>
        <BotoesLeft>
          <button onClick={() => setIsPopActive(!isPopActive)}>{isPopActive? <BsGearFill size={15}/> :<BsGear size={15}/>}</button>
          <button onClick={handlePin}>{pinned? <BsPinAngleFill size={15}/>:<BsPinAngle size={15}/>}</button>
        </BotoesLeft>
        
        <BotoesDir>
          <button onClick={handleMinimize}><BsDashLg size={15} /></button>
          <button onClick={handleMaximize}><BsSquare size={11} /></button>
          <button onClick={handleClose}><BsX size={18} /></button>
        </BotoesDir>
      </FrameStyle>
      {isPopActive && 
        <Popover handleSalvar={handleSalvar} setIsPopActive={setIsPopActive}/>
      }

    </>
    
  )
}

export default Frame