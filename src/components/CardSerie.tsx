import "./CardSerie.css";
import { useFavoritos } from "../context/FavoritosContext";
import { useNavigate } from "react-router-dom";

type CardSerieProps = {
  id: number;
  titulo: string;
  diretor: string;
  ano: string;
  imagem: string;
};

export default function CardSerie({ id, titulo, diretor, ano, imagem }: CardSerieProps) {
  const { adicionarFavorito } = useFavoritos();
  const navigate = useNavigate();

  function handleFavoritar() {
adicionarFavorito({ id, titulo, diretor, ano: Number(ano), imagem });
    navigate("/favoritos");
  }

  return (
    <div className="card-serie">
      <img src={imagem} alt={titulo} />
      <h3>{titulo}</h3>
      <p>{diretor}</p>
      <p>{ano}</p>

      <button className="btn-favoritar" onClick={handleFavoritar}>⭐</button>
    </div>
  );
}
