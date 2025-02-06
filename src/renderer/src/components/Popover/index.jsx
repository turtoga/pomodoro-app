import React, { useState } from 'react'
import styled from 'styled-components'
import Input from '../Input'
import Button from '../Button'

const PopoverStyled = styled.div`
  background-color: #F8F4EB;
  position: absolute;
  border: 2px solid #000;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-top: none;
  top: 39px;
  width: 15rem;
  padding: 8px 20px;
  -webkit-user-select: none;
  z-index: 2;


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
  z-index: 1;
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
  span{
    font-size: 14px;
  }
`


const TiposContainer = styled.div`
  margin-top: 8px;
  display: flex;
  justify-content: space-between;
  gap: 40px;

  div{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

const BotaoContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
`

const Titulo = styled.span`
  font-size: 12px;
  margin-bottom: 4px;
`

const Popover = ({setIsPopActive, handleSalvar}) => {
  
  
  const temposSalvo = JSON.parse(localStorage.getItem("tempos")) || {}

  const [minFoco, setMinFoco] = useState(temposSalvo.foco || 25)
  const [minPausa, setMinPausa] = useState(temposSalvo.pausa || 5)
  const [minIntervalo, setMinIntervalo] = useState(temposSalvo.intervalo || 15)

  const novosTempos = {
    foco: minFoco,
    pausa: minPausa,
    intervalo: minIntervalo
  }

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
              <Titulo>Foco</Titulo>
              <Input valor={minFoco} step="1" max={60} min={0} type="number" aoAlterado={valor => {setMinFoco(valor);}}/>
            </div>
            <div>
              <Titulo>Pausa</Titulo>
              <Input valor={minPausa} step="1" max={60} min={0} type="number" aoAlterado={valor => {setMinPausa(valor);}}/>
            </div>
            <div>
              <Titulo>Intervalo</Titulo>
              <Input valor={minIntervalo} step="1" max={60} min={0} type="number" aoAlterado={valor => {setMinIntervalo(valor);}}/>
            </div>
          </TiposContainer>
          <BotaoContainer>
            <Button handleClick={() => {handleSalvar(novosTempos); setIsPopActive(false)}}>Salvar</Button>
          </BotaoContainer>
          
        </TempoContainer>
        
      </PopoverStyled>
      
    </>
    
  )
}

export default Popover