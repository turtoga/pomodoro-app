import styled from "styled-components"
import EstiloGlobal from "./components/GlobalStyles"
import Timer from "./components/Timer"
import { useEffect, useState } from "react"
import Frame from "./components/Frame"
import Tipo from "./components/Tipo"
import { FaUserNinja } from "react-icons/fa";
import { MdSelfImprovement } from "react-icons/md";
import { GiNightSleep } from "react-icons/gi";

const AppStyled = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  justify-content: center;
`

const TipoStyled = styled.div`
  display: flex;
  margin-top: 24px;
  gap: 8px;
`

function App() {

  const pomodoroTime = localStorage.getItem("Tempo") || 25;

  const[tipo, setTipo] = useState("foco")
  const[duracao, setDuracao] = useState(pomodoroTime)

  const handleSalvar = (valor) => {
    if(valor>-1 && valor < 10000) {
      setDuracao(valor)
      localStorage.setItem("Tempo",valor)
      return
    }
    
    valor=25
    setDuracao(valor)
    localStorage.setItem("Tempo",valor)
    
  }

  return (
    <>
      <EstiloGlobal/>
      <Frame handleSalvar={handleSalvar}/>
      
      <AppStyled>
        <Timer duracao={duracao}/>
        {/* <TipoStyled>
          <Tipo icon={<FaUserNinja size={16}/>} />
          <Tipo icon={<MdSelfImprovement size={16}/>}/>
          <Tipo icon={<GiNightSleep size={16}/>}/>
        </TipoStyled> */}
        
      </AppStyled>
      
    </>
  )
}

export default App

