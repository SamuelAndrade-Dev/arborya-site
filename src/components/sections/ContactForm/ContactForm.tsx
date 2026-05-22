"use client";

import { useState } from "react";
import { Container } from "@/components/Ui/Container/Container";
import { createWhatsappMessage } from "@/utils/createWhatsappMessage";
import { Input } from "@/components/Ui/Input/Input";

export function ContactForm() {
  const [name, setName] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [terrainType, setTerrainType] = useState("");
  const [clientType, setClientType] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const message = createWhatsappMessage({
      name,
      state,
      city,
      terrainType,
      clientType,
    });

    const whatsappNumber = "61993321729";

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message,
    )}`;

    window.open(url, "_blank");
  }

  return (
    <section>
      <Container>
        <span>Contato</span>

        <h2>Solicite um orçamento</h2>

        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Nome"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />

          <Input
            type="text"
            placeholder="Estado"
            value={state}
            onChange={(event) => setState(event.target.value)}
          />

          <Input
            type="text"
            placeholder="Qual Cidade do estado"
            value={city}
            onChange={(event) => setCity(event.target.value)}
          />

          <select
            name="terrainType"
            onChange={(event) => setTerrainType(event.target.value)}
          >
            <optgroup label="Terrenos">
              <option value="Argiloso">Argiloso</option>
              <option value="Pedregoso">Pedregoso</option>
              <option value="Vermelha">Terra Vermelha</option>
            </optgroup>
          </select>

          <select
            name="clientType"
            onChange={(event) => setClientType(event.target.value)}
          >
            <optgroup label="Tipo de Cliente">
              <option value="Cliente comum">Cliente Comum</option>
              <option value="Empresa">Empresa</option>
              <option value="Prefeitura">Prefeitura</option>
            </optgroup>
          </select>

          <button type="submit">Enviar para Whatsapp</button>
        </form>
      </Container>
    </section>
  );
}
