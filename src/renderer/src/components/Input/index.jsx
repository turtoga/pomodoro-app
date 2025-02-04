import React from 'react'
import styled from 'styled-components'

const InputStyle = styled.input`
  width: 100%;
  padding: 8px 10px;
  border-radius: 16px;
  font-size: 16px;
  border: 2px solid #000;
  box-shadow: 2px 4px 0px #000;

  &:focus {
    outline: none;
    border-color: #686868;
    box-shadow: 2px 4px 0px #686868;
  }
`

const Input = ({type, valor, aoAlterado, min="", step=""}) => {
  return (
    <InputStyle type={type} onChange={(e)=>aoAlterado(e.target.value)} step={step} min={min} value={valor}>

    </InputStyle>
  )
}

export default Input