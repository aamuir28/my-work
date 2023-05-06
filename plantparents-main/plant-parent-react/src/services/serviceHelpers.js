
export function addFetch(record, url, identityPropertyName) {
    const init = {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("PP_JWT")}`
      },
      body: JSON.stringify(record)
    };
  
    return fetch(url, init)
      .then(response => {
        if (response.status === 201 || response.status === 400) {
          return response.json();
        } else {
          return Promise.reject(`Unexpected response status code: ${response.status}`);
        }
      })
      .then(data => {
        if (data[identityPropertyName]) {
          return { type: 'success', payload: data };
        } else {
          return { type: 'invalid', messages: data };
        }
      })
      .catch(console.log);
  }
  
  export function editFetch(record, url) {
    const init = {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(record)
    };
  
    return fetch(url, init)
      .then(response => {
        if (response.status === 204) {
          return null;
        } else if (response.status === 400) {
          return response.json();
        } else {
          return Promise.reject(`Unexpected response status code: ${response.status}`);
        }
      })
      .then(data => {
        if (!data) {
          return { type: 'success' };
        } else {
          return { type: 'invalid', messages: data };
        }
      })
      .catch(console.log);
  }
  
  export function deleteFetch(url) {
    const init = {
      method: 'DELETE'
    };
  
    return fetch(url, init)
      .then(response => {
        if (response.status === 204) {
          return { type: 'success' };
        } else if (response.status === 404) {
          return { type: 'notfound' };
        } else {
          return Promise.reject(`Unexpected response status code: ${response.status}`);
        }
      })
      .catch(console.log);
  }