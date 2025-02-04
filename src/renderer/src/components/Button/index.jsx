import React from 'react'
import styled from 'styled-components'

const ButtonStyle = styled.button`
    cursor: pointer;
    padding: 4px 12px;
    background-color: #5CB05F;
    border-radius: 16px;
    font-size: 20px;
    font-weight: 600;
    border: 2px solid #000;
    box-shadow: 4px 6px 0px #000;
    -webkit-user-select: none;
    
    &:hover {
      background-color: #62b965
    }

    &:active {
      background-color: #3ab63e
    }

`

const Button = ({children, handleClick}) => {
  return (
    <ButtonStyle onClick={handleClick}>
        {children}
    </ButtonStyle>
  )
}

export default Button