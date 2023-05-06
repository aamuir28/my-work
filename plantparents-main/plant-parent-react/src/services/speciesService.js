const url = "http://localhost:8080/api/species";

export async function findAll() {
  const response = await fetch(url);
  if (response.ok) {
    return response.json();
  }
  return Promise.reject("Could not fetch species.")
}

export async function findById(speciesId) {
  const response = await fetch(`${url}/${speciesId}`);
  if (response.ok) {
    return response.json();
  }
  return Promise.reject(`Could not fetch species ${speciesId}.`);
}

export async function deleteById(speciesId) {
  const config = {
    method: "DELETE",
    headers: {
      "Authorization": `Bearer ${localStorage.getItem("PP_JWT")}`
    }
  };

  const response = await fetch(`${url}/${speciesId}`, config);
  if (response.ok) {
    return;
  }
  return Promise.reject(`Could not delete species with id ${speciesId}.`)
}

async function postPutPatch(species, method, theUrl) {

  const config = {
    method: method,
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${localStorage.getItem("PP_JWT")}`
    },
    body: JSON.stringify(species)
  }

  const response = await fetch(theUrl, config);
  if (response.ok) {
    if (method === "POST") {
      return response.json();
    }
    return;
  }

  if (response.status === 400) {
    const errors = await response.json();
    return Promise.reject(errors);
  }
  return Promise.reject();
}

async function update(species) {
  return postPutPatch(species, "PUT", `${url}/${species.speciesId}`);
}

async function add(species) {
  return postPutPatch(species, "POST", url);
}

export async function save(species) {
  if (species.speciesId) {
    return update(species);
  } else {
    return add(species);
  }

}