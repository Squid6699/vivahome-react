import Inicio from "./components/Inicio"
import Propiedad from "./components/Propiedad"
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element = {<Inicio/>}/>
          <Route path="/propiedad/:id" element = {<Propiedad/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
