import React, { useEffect } from "react";

export default function Contato() {
  useEffect(() => {
    console.log("Bem-vindo à página de contato!");
    alert("Bem-vindo à página de contato!");
  }, []);

  return (
    <div style={{ padding: "20px", maxWidth: "500px", margin: "0 auto" }}>
      <h1>Contato</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert("Mensagem enviada com sucesso!");
        }}
      >
        <div style={{ marginBottom: "10px" }}>
          <label>Nome:</label>
          <input type="text" placeholder="Seu nome" required style={{ width: "100%", padding: "8px" }} />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>E-mail:</label>
          <input type="email" placeholder="Seu e-mail" required style={{ width: "100%", padding: "8px" }} />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Mensagem:</label>
          <textarea placeholder="Sua mensagem" required style={{ width: "100%", padding: "8px" }} />
        </div>

        <button type="submit" style={{ padding: "10px 20px", cursor: "pointer" }}>
          Enviar
        </button>
      </form>
    </div>
  );
}
