import CardFilme from "../components/CardFilme";
import { useFavoritos } from "../context/FavoritosContext";

export default function Favoritos() {
  const { favoritos } = useFavoritos();

  return (
    <div>
      <h2>Favoritos</h2>

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {favoritos.length === 0 ? (
          <p>Nenhum favorito ainda</p>
        ) : (
          favoritos.map((filme) => (
            <CardFilme
              key={filme.id}
              id={filme.id}
              titulo={filme.titulo}
              diretor={filme.diretor}
              ano={filme.ano}
              imagem={filme.imagem}
            />
          ))
        )}
      </div>
    </div>
  );
}
