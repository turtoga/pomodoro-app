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
  
  top: 39px;
  width: 40%;
  padding: 8px 8px;

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

  h3 {
    padding: 4px;
    margin: 0;
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
  max-width: 40px;
  margin: 8px 0px;

  span{
    font-size: 15px;
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
          <h3>Ajustes</h3>
        </HeaderStyle>
        <TempoContainer>
          <span>Tempo(Em minutos)</span>
          <TiposContainer>
            <div>
              <span>Foco</span>
              <Input valor={minFoco} type="number" aoAlterado={valor => setMinFoco(valor)}/>
            </div>
          </TiposContainer>
          <Button handleClick={() => {handleSalvar(minFoco); setIsPopActive(false)}}>Salvar</Button>
        </TempoContainer>
        
      </PopoverStyled>
      
    </>
    
  )
}

export default Popover