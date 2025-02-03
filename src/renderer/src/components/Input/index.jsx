import React from 'react'
import styled from 'styled-components'

const InputStyle = styled.input`
  width: 100%;
  padding: 4px 12px;
  border-radius: 16px;
  font-size: 16px;
  border: 2px solid #000;
  box-shadow: 2px 4px 0px #000;
`

const Input = ({type, valor, aoAlterado}) => {
  return (
    <InputStyle type={type} onChange={(e)=>aoAlterado(e.target.value)} value={valor}>

    </InputStyle>
  )
}

export default Input