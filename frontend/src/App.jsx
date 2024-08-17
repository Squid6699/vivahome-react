import Catalogo from "./components/Catalogo"
import Propiedad from "./components/Propiedad"
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element = {<Catalogo/>}/>
          <Route path="/propiedad/:id" element = {<Propiedad/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
