import Inicio from "./components/Inicio"
import Propiedad from "./components/Propiedad"
import { FiltersProvider } from "./context/filters";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {

  return (
    <>
      <BrowserRouter>
        <FiltersProvider>
          <Routes>
            <Route path="/" element = {<Inicio/>}/>
            <Route path="/propiedad/:id" element = {<Propiedad/>}/>
          </Routes>
        </FiltersProvider>
      </BrowserRouter>
    </>
  )
}

export default App
