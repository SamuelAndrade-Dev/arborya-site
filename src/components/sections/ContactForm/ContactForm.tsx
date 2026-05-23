"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container/Container";
import { createWhatsappMessage } from "@/utils/createWhatsappMessage";
import { Input } from "@/components/ui/Input/Input";
import { Select } from "@/components/ui/Select/Select";
import { clientTypes } from "@/data/clientTypes";
import { terrainTypes } from "@/data/terrainTypes";
import { ValidateContactForm } from "@/utils/validateContactForm";
import { TextArea } from "@/components/ui/TextArea/TextArea";

export function ContactForm() {
  const [name, setName] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [terrainType, setTerrainType] = useState("");
  const [clientType, setClientType] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const error = ValidateContactForm({
      name,
      state,
      city,
      terrainType,
      clientType,
      message,
    });

    if (error) {
      setErrorMessage(error);
      return;
    }

    const whatsappMessage = createWhatsappMessage({
      name,
      state,
      city,
      terrainType,
      clientType,
      message,
    });

    const whatsappNumber = "61999369072";

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage,
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

          <Select
            value={terrainType}
            placeholder="Tipo de terreno"
            onChange={(event) => setTerrainType(event.target.value)}
            options={terrainTypes}
          />

          <Select
            value={clientType}
            placeholder="Tipo de cliente"
            onChange={(event) => setClientType(event.target.value)}
            options={clientTypes}
          />

          <TextArea
            placeholder="Descreva a sua necessidade"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          />

          <button type="submit">Enviar para Whatsapp</button>
        </form>

        {errorMessage && <p>{errorMessage}</p>}
      </Container>
    </section>
  );
}
