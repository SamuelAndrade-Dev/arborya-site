type CreateWhatsappMessageProps = {
  name: string;
  state: string;
  city: string;
  terrain: string;
  clientType: string;
};

export function createWhatsappMessage({
  name,
  state,
  city,
  terrain,
  clientType,
}: CreateWhatsappMessageProps) {
  return `
  Olá meu nome é: ${name},

  Sou do estado de: ${state},

  Residindo na cidade de: ${city},

  O terreno onde eu moro é: ${terrain},

  Sou cliente: ${clientType},
  `;
}
