import Catalogo from "./components/Catalogo"
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { SesionProvider } from "./context/sesion";

function App() {
  return (
    <>
      <SesionProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element = {<Catalogo/>}/>
          </Routes>
        </BrowserRouter>
      </SesionProvider>

    </>
  )
}

export default App
