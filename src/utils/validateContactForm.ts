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
}: ValidateContactFormProps) {
  if (!name.trim()) {
    return;
  }

  if (!state.trim()) {
    return;
  }

  if (!city.trim()) {
    return;
  }

  if (!terrainType) {
    return;
  }

  if (!clientType) {
    return;
  }

  if (!message.trim()) {
    return;
  }

  return null;
}
