import React from 'react'
import styled from 'styled-components'

const TipoStyle = styled.button`
  border-radius: 30px;
  padding: 4px 6px;
  border: 2px solid #000;
  box-shadow: 4px 3px 0px #000;
  cursor: pointer;
  background-color: ${({inaColor, ativo, color}) => (ativo ? color : (inaColor ? inaColor : "white"))};
  transition: background-color 0.1s;
  svg {
    font-size: clamp(16px, 4vh, 24px);
  }
`

const Tipo = ({icon, inaColor="", ativo = false,color="", handleOnChangeTipo, tipo}) => {
  return (
    <TipoStyle inaColor={inaColor} color={color} ativo={ativo} onClick={() => handleOnChangeTipo(tipo)}>
      {icon}
    </TipoStyle>
  )
}

export default Tipo