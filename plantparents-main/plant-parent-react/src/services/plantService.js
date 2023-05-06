const url = "http://localhost:8080/api/plant";

export async function findAll() {
  const response = await fetch(url);
  if (response.ok) {
    return response.json();
  }
  return Promise.reject("Could not fetch plants.")
}

export async function findById(plantId) {
  const response = await fetch(`${url}/${plantId}`);
  if (response.ok) {
    return response.json();
  }
  return Promise.reject(`Could not fetch plant ${plantId}.`);
}

export async function deleteById(plantId) {
  const config = {
    method: "DELETE",
    headers: {
      "Authorization": `Bearer ${localStorage.getItem("PP_JWT")}`
    }
  };

  const response = await fetch(`${url}/${plantId}`, config);
  if (response.ok) {
    return;
  }
  return Promise.reject(`Could not delete plant with id ${plantId}.`)
}

async function postPutPatch(plant, method, theUrl) {

  const config = {
    method: method,
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${localStorage.getItem("PP_JWT")}`
    },
    body: JSON.stringify(plant)
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

async function update(plant) {
  return postPutPatch(plant, "PUT", `${url}/${plant.plantId}`);
}

async function add(plant) {
  return postPutPatch(plant, "POST", url);
}

export async function save(plant) {
  if (plant.plantId) {
    return update(plant);
  } else {
    return add(plant);
  }

}

export async function updatePlant(plant) {
    try {
      const response = await fetch(`/api/plants/${plant.plantId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(plant),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      return await response.json();
    } catch (err) {
      console.error(err);
    }
  }
  
  export async function addPlant(plant) {
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("PP_JWT")}`
      },
      body: JSON.stringify(plant)
    }
  
    const response = await fetch(url, config);
    if (response.ok) {
      return response.json();
    }
  
    if (response.status === 400) {
      const errors = await response.json();
      return Promise.reject(errors);
    }
    return Promise.reject();
  }
  