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
  position: absolute;
  bottom: 20px;

  svg {
    font-size: 16px;
  }
  
  @media  (min-height: 400px) {
    position: relative;
    margin-top: 40px;
  }
`

function App() {

  //Variáveis
  const tempos = JSON.parse(localStorage.getItem("tempos")) || {
    foco: 25,
    pausa: 5,
    intervalo: 15,
  };
  
  const [tipo, setTipo] = useState("foco");
  const [duracao, setDuracao] = useState(tempos.foco);
  const [atualizar, setAtualizar] = useState(false)

  //Funções
  useEffect(() => {
    switch (tipo) {
      case "foco":
        setDuracao(tempos.foco)
        break;

      case "pausa":
        setDuracao(tempos.pausa)
        break;

      case "intervalo":
        setDuracao(tempos.intervalo)
        break;  
    
      default:
        break;
    }
    setAtualizar(false)

  }, [tipo, atualizar])

  const handleSalvar = (tempos) => {
    const novosTempos = {
      foco: Math.min(Math.max(Number(tempos.foco) || 25, 0.1), 9999), 
      pausa: Math.min(Math.max(Number(tempos.pausa) || 5, 0.1), 9999), 
      intervalo: Math.min(Math.max(Number(tempos.intervalo) || 15, 0.1), 9999), 
    }

    localStorage.setItem("tempos", JSON.stringify(novosTempos));
    setAtualizar(true)
  }

  const handleOnChangeTipo = (type) => {
    setTipo(type)
  }

  return (
    <>
      <EstiloGlobal/>
      <Frame handleSalvar={handleSalvar}/>
      <AppStyled>
        <Timer tipo={tipo} setTipo={setTipo} duracao={duracao}/>
        <TipoStyled>
          <Tipo tipo={"foco"} handleOnChangeTipo={handleOnChangeTipo} ativo={tipo==="foco"} color="#e94444" inaColor="#8d4d4d" icon={<FaUserNinja/>} />
          <Tipo tipo={"pausa"} handleOnChangeTipo={handleOnChangeTipo} ativo={tipo==="pausa"} color="#44bae9" inaColor="#4d808d" icon={<MdSelfImprovement/>}/>
          <Tipo tipo={"intervalo"} handleOnChangeTipo={handleOnChangeTipo} ativo={tipo==="intervalo"} color="#d9e944" inaColor="#8d8c4d" icon={<GiNightSleep/>}/>
        </TipoStyled>
      </AppStyled>
      
    </>
  )
}

export default App

