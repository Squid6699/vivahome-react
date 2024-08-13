import Catalogo from "./components/Catalogo"
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { SesionProvider } from "./context/sesion";

function App() {
  return (
    <>
      <BrowserRouter>
        <SesionProvider>
          <Routes>
            <Route path="/" element = {<Catalogo/>}/>
          </Routes>
        </SesionProvider>
      </BrowserRouter>
    </>
  )
}

export default App
