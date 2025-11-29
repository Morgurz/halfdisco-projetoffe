import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FavoritosProvider } from "./context/FavoritosContext";

import Header from "./components/Header";
import Login from "./pages/Login";
import Filmes from "./pages/Filmes";
import Series from "./pages/Serie";
import Favoritos from "./pages/Favoritos";
import Contato from "./pages/Contato";
import Footer from "./components/Footer";


function App() {
  return (
    <BrowserRouter>
      <FavoritosProvider>
        <Header />

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Login />} />
          <Route path="/filmes" element={<Filmes />} />
          <Route path="/series" element={<Series />} />
          <Route path="/favoritos" element={<Favoritos />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>

        <Footer />
      </FavoritosProvider>
    </BrowserRouter>
  );
}

export default App;