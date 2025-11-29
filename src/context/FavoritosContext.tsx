import { createContext, useState, useContext } from "react";

type Filme = {
  id: number;
  titulo: string;
  diretor: string;
  ano: number;
  imagem: string;
};

type FavoritosContextType = {
  favoritos: Filme[];
  adicionarFavorito: (filme: Filme) => void;
};

const FavoritosContext = createContext<FavoritosContextType | undefined>(undefined);

export function FavoritosProvider({ children }: { children: React.ReactNode }) {
  const [favoritos, setFavoritos] = useState<Filme[]>([]);

  function adicionarFavorito(filme: Filme) {
    if (!favoritos.some((f) => f.id === filme.id)) {
      setFavoritos([...favoritos, filme]);
    }
  }

  return (
    <FavoritosContext.Provider value={{ favoritos, adicionarFavorito }}>
      {children}
    </FavoritosContext.Provider>
  );
}

export function useFavoritos() {
  const context = useContext(FavoritosContext);
  if (!context) {
    throw new Error("useFavoritos deve ser usado dentro de <FavoritosProvider>");
  }
  return context;
}
