import "./CardFilme.css";
import { useFavoritos } from "../context/FavoritosContext";
import { useNavigate } from "react-router-dom";

type CardFilmeProps = {
  id: number;
  titulo: string;
  diretor: string;
  ano: number; // deve ser número
  imagem: string;
};

export default function CardFilme({ id, titulo, diretor, ano, imagem }: CardFilmeProps) {
  const { adicionarFavorito } = useFavoritos(); // pega a função do contexto
  const navigate = useNavigate();

  function handleFavoritar() {
    adicionarFavorito({ id, titulo, diretor, ano, imagem }); // adiciona ao contexto
    navigate("/favoritos"); // navega para a página de favoritos
  }

  return (
    <div className="card-filme">
      <img src={imagem} alt={titulo} />
      <h3>{titulo}</h3>
      <p>{diretor}</p>
      <p>{ano}</p>
      <button className="btn-favoritar" onClick={handleFavoritar}>⭐</button>
    </div>
  );
}

