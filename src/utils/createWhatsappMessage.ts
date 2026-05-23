type CreateWhatsappMessageProps = {
  name: string;
  state: string;
  city: string;
  terrainType: string;
  clientType: string;
  message: string;
};

export function createWhatsappMessage({
  name,
  state,
  city,
  terrainType,
  clientType,
  message,
}: CreateWhatsappMessageProps) {
  return `
  Olá meu nome é: ${name},

  Sou do estado de: ${state},

  Residindo na cidade de: ${city},

  O terreno onde eu moro é: ${terrainType},

  Sou cliente: ${clientType},

  Mensagem... ${message},

  Gostaria de solicitar um orçamento e uma visita.
  `;
}
