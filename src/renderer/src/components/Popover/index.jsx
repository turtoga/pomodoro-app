import React, { useState } from 'react'
import styled from 'styled-components'
import Input from '../Input'
import Button from '../Button'

const PopoverStyled = styled.div`
  background-color: #F8F4EB;
  position: absolute;
  border: 2px solid #000;
  border-bottom-right-radius: 16px;
  border-bottom-left-radius: 16px;
  border-top: none;
  top: 39px;
  width: 12rem;
  padding: 8px 8px;
  -webkit-user-select: none;


  &::before {
    content: '';
    position: absolute;
    top: -16px; 
    left: 18px;
    transform: translateX(-50%);
    border-width: 8px;
    border-style: solid;
    border-color: transparent transparent #F8F4EB ;
  }

`

const Overlay = styled.div`
  position: fixed;
  top: 39px;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 0;
  border: none;
  background-color: #00000049;

`

const HeaderStyle = styled.header`
  display: flex;
  justify-content: center;
  
  border-bottom: 2px black dashed;
  margin-bottom: 8px;

  h5 {
    padding: 4px;
    margin: 0;
    font-size: 16px;
  }

  
`

const TempoContainer = styled.form`
  margin: 8px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  span{
    font-size: 14px;
  }
`


const TiposContainer = styled.div`
  margin-top: 8px;
  max-width: 45px;
  margin: 8px 0px;

  span{
    font-size: 15px;
    margin-bottom: 4px;
  }

  div{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

const Popover = ({setIsPopActive, handleSalvar}) => {
  
  const tempo = localStorage.getItem("Tempo")

  const [minFoco, setMinFoco] = useState(tempo? tempo:25)

  return (

    <>
    <Overlay onClick={() => setIsPopActive(false)}/>
      <PopoverStyled>
        <HeaderStyle>
          <h5>Ajustes</h5>
        </HeaderStyle>
        <TempoContainer>
          <span>Tempo(Em minutos)</span>
          <TiposContainer>
            <div>
              <span>Foco</span>
              <Input valor={minFoco} step="1" min={0} type="number" aoAlterado={valor => {setMinFoco(valor);}}/>
            </div>
          </TiposContainer>
          <Button handleClick={() => {handleSalvar(minFoco); setIsPopActive(false)}}>Salvar</Button>
        </TempoContainer>
        
      </PopoverStyled>
      
    </>
    
  )
}

export default Popover