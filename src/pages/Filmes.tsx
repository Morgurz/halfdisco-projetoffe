import React, { useState } from "react";
import { filmes } from "../data/filmes";
import CardFilme from "../components/CardFilme";
import SearchBar from "../components/SearchBar";
import "./Filmes.css"; // certifique-se de ter o CSS separado

export default function Filmes() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFilmes = filmes.filter((item) =>
    item.titulo.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <header className="header-filmes">
        <h1>Filmes</h1>

        {/* Container para centralizar */}
        <div className="search-container">
          <SearchBar
            placeholder="Buscar filme..."
            onSearch={setSearchQuery}
          />
        </div>
      </header>

      <div className="lista-filmes">
        {filteredFilmes.map((item) => (
          <CardFilme
            key={item.id}
            id={item.id}
            titulo={item.titulo}
            diretor={item.diretor}
            ano={item.ano}
            imagem={item.imagem}
          />
        ))}
      </div>
    </div>
  );
}
