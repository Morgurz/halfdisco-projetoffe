import { useState } from "react";
import "./Login.css";
import fundologin from "../assets/img/fundologin.jpg";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    if (!email.includes("@")) {
      setErro("A senha ou o email estão incorretos");
      return;
    }

    if (senha.length < 5) {
      setErro("A senha deve ter pelo menos 5 caracteres");
      return;
    }

    setErro("");
    alert("Login realizado com sucesso!");
  }

  return (
    <div
      className="login-container"
      style={{ backgroundImage: `url(${fundologin})` }}
    >
      <div className="login-card">
        <h2>Entrar</h2>

        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />

          {erro && <p className="erro">{erro}</p>}

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}
