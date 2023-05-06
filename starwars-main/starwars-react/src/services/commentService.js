const url = "http://localhost:8080/comment";


async function postPutPatch(comment, method, theUrl) {

    const config = {
        method: method,
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("SF_JWT")}`
        },
        body: JSON.stringify(comment)
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


async function add(comment) {
    return postPutPatch(comment, "POST", url);
}

export async function save(comment) {
        return add(comment);
    };
