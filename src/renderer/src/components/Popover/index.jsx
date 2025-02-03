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
  padding: 16px;

`

const TiposContainer = styled.div`
  gap: 40px;
  max-width: 200px;
  justify-content: center;
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

const Popover = ({setIsPopActive}) => {
  
  const [minFoco, setMinFoco] = useState(25)

  return (

    <>
    <Overlay onClick={() => setIsPopActive(false)}/>
      <PopoverStyled>
        <header>
          Configurações
        </header>
        <div>
          Tempo(Em minutos)
          <TiposContainer>
            <div>
              Foco
              <Input valor={minFoco} type="number" aoAlterado={valor => setMinFoco(valor)}/>
            </div>
            <Button>Salvar</Button>
          </TiposContainer>
        </div>
        
      </PopoverStyled>
      
    </>
    
  )
}

export default Popover