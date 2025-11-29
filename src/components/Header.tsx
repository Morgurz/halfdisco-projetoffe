import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <h1 className="logo">HλlfDisco</h1>

      <nav>
        <Link className="menu" to="/">Login</Link>
        <Link className="menu" to="/filmes">Filmes</Link>
        <Link className="menu" to="/series">Séries</Link>
        <Link className="menu" to="/favoritos">Favoritos</Link>
        <Link className="menu" to="/contato">Contato</Link>
      </nav>
    </header>
  );
}

export default Header;
