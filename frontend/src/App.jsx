import Catalogo from "./components/Catalogo"
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element = {<Catalogo/>}/>
      </Routes>
    </>
  )
}

export default App
