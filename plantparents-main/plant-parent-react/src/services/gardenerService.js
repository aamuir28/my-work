const url = "http://localhost:8080/api/gardener";

export async function findById(gardenerId) {
  const response = await fetch(`${url}/${gardenerId}`);
  if (response.ok) {
    return response.json();
  }
  return Promise.reject(`Could not fetch gardeners ${gardenerId}.`);
}

export async function deleteByGardenerId(gardenerId) {
  return Promise.reject(`Could not fetch gardener ${gardenerId}.`);
}

export async function deleteById(gardenerId) {
  const config = {
    method: "DELETE",
    headers: {
      "Authorization": `Bearer ${localStorage.getItem("PP_JWT")}`
    }
  };

  const response = await fetch(`${url}/${gardenerId}`, config);
  if (response.ok) {
    return;
  }
  return Promise.reject(`Could not delete gardener with id ${gardenerId}.`)
}

async function postPutPatch(gardener, method, theUrl) {

  const config = {
    method: method,
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${localStorage.getItem("PP_JWT")}`
    },
    body: JSON.stringify(gardener)
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

async function update(gardener) {
  return postPutPatch(gardener, "PUT", `${url}/${gardener.gardenerId}`);
}

async function add(gardener) {
  return postPutPatch(gardener, "POST", url);
}

export async function addGardenerToPlot(gardener, plotId) {
  //new post request to addGardener endpoint
}

export async function save(gardener) {
  if (gardener.gardenerId) {
    return update(gardener);
  } else {
    return add(gardener);
  }

}