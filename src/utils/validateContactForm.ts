type ValidateContactFormProps = {
  name: string;
  state: string;
  city: string;
  terrainType: string;
  clientType: string;
  message: string;
};

export function ValidateContactForm({
  name,
  state,
  city,
  terrainType,
  clientType,
  message,
}: ValidateContactFormProps): string | null {
  if (!name.trim()) {
    return "Por favor, informe o seu nome.";
  }
  if (!state.trim()) {
    return "Por favor, informe o estado.";
  }
  if (!city.trim()) {
    return "Por favor, informe a cidade.";
  }
  if (!terrainType) {
    return "Por favor, selecione o tipo de terreno.";
  }
  if (!clientType) {
    return "Por favor, selecione o tipo de cliente.";
  }
  if (!message.trim()) {
    return "Por favor, descreva a sua necessidade.";
  }

  return null;
}
