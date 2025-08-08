"use client";

import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";

export default function Input() {
  const router = useRouter();
  const [destino, setDestino] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!destino.trim()) return;

    router.push(`/roteiro/${encodeURIComponent(destino.trim().toLowerCase())}`);
  }
  return (
    <>
      <h1 className="title">Roteiro de viagens</h1>
      <p className="description">
        Digite o destino e receba um roteiro personalizado com sugestões de
        passeios, gastronomia e cultura, gerado pelo modelo GPT-35-Turbo da
        OpenAI, implementado via Azure.
      </p>
      <form className="form" onSubmit={handleSubmit} noValidate>
        <label htmlFor="destino" className="label">
          Quero viajar para:
        </label>
        <input
          id="destino"
          name="destino"
          type="text"
          placeholder="Ex: Roma, Itália"
          className="input"
          required
          value={destino}
          onChange={(e) => setDestino(e.target.value)}
          aria-describedby="destinoHelp"
        />
        <button
          type="submit"
          className="button"
          aria-label={`Gerar roteiro para ${destino || "destino"}`}
        >
          Gerar roteiro
        </button>
        <p id="destinoHelp" className="description">
          Após enviar, você será redirecionado para o roteiro personalizado.
        </p>
      </form>
    </>
  );
}
