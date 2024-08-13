import Catalogo from "./components/Catalogo"
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element = {<Catalogo/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
