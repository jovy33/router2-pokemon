// importar componentes del react-router-dom
import { BrowserRouter, Routes, Route } from "react-router-dom";

// importar el componente Navbar
import Navbar from "./components/NavbarPropio";
import Home from "./views/Home"
import Pokemones from "./views/Pokemones"
import PokemonesDetalle from "./views/PokemonesDetalle"

function App() {
  return (
    <>
      {/* Definimos el BrowserRouter y envolvemos el componente NavBar */}
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemones" element={<Pokemones />} />
          <Route path="/pokemones-detalle/:id" element={<PokemonesDetalle />} />
        </Routes>
      </ BrowserRouter>
    </>
  )
}

export default App;