import React from 'react'
import styled from 'styled-components'

const TipoStyle = styled.button`
  border-radius: 20px;
  padding: 4px 6px;
  border: 2px solid #000;
  box-shadow: 4px 3px 0px #000;
  cursor: pointer;
`

const Tipo = ({icon, color, active = false}) => {
  return (
    <TipoStyle>
      {icon}
    </TipoStyle>
  )
}

export default Tipo