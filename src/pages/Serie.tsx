import React, { useState } from "react";
import { serie } from "../data/serie";
import CardSerie from "../components/CardSerie";
import SearchBar from "../components/SearchBar";
import "./Serie.css";

export default function Series() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredSeries = serie.filter((item) =>
    item.titulo.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <header className="header-serie">
        <h1>Séries</h1>

        <div className="search-container">
          <SearchBar
            placeholder="Buscar série..."
            onSearch={setSearchQuery}
          />
        </div>
      </header>

      <div className="lista-serie">
        {filteredSeries.map((item) => (
          <CardSerie
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
