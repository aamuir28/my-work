const url = "http://localhost:8080/api/plot";


export async function findAll() {
  const response = await fetch(url);
  if (response.ok) {
    return response.json();
  }
  return Promise.reject("Could not fetch plots.")
}

export async function findById(plotId) {
  const response = await fetch(`${url}/${plotId}`);
  if (response.ok) {
    return response.json();
  }
  return Promise.reject(`Could not fetch plots ${plotId}.`);
}

export async function addGardenerToPlot(plotId, gardenerId) {
    const config = {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${localStorage.getItem("PP_JWT")}`
      }
    };

    const response = await fetch (`${url}/addGardenerToPlot/${plotId}/${gardenerId}`, config);
    if (response.ok) {
      return;
    }
    return Promise.reject(`Could not add gardener to plot with id ${plotId}.`)
}

export async function deleteById(plotId) {
  const config = {
    method: "DELETE",
    headers: {
      "Authorization": `Bearer ${localStorage.getItem("PP_JWT")}`
    }
  };

  const response = await fetch(`${url}/${plotId}`, config);
  if (response.ok) {
    return;
  }
  return Promise.reject(`Could not delete plot with id ${plotId}.`)
}

async function postPutPatch(plot, method, theUrl) {

  const config = {
    method: method,
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${localStorage.getItem("PP_JWT")}`
    },
    body: JSON.stringify(plot)
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

async function update(plot) {
  return postPutPatch(plot, "PUT", `${url}/${plot.plotId}`);
}

async function add(plot) {
  return postPutPatch(plot, "POST", url);
}

export async function save(plot) {
  if (plot.plotId) {
    return update(plot);
  } else {
    return add(plot);
  }

}
