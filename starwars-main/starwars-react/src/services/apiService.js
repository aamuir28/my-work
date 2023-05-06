const url = "https://swapi.dev/api/species";

export async function fetchSpecies() {
  const response = await fetch(url);
  if (response.ok) {
    return response.json();
  }
  return Promise.reject("Could not find species.")
}

export async function fetchSpeciesById(id) {
  const response = await fetch(`${url}/${id}`)
  if (response.ok) {
    return;
  }
  return Promise.reject(`Could not find species id: ${id}`)
}