import { addFetch, editFetch, deleteFetch } from './serviceHelpers';

const url = "http://localhost:8080/api/Community";



export function getCommunities() {
  return fetch(`${url}`)
    .then(response => response.json());
}

export function getCommunity(communityId) {
  // TODO handle when the API returns a 404
  return fetch(`${url}/${communityId}`)
    .then(response => response.json());
}

export function addCommunity(community) {
  return addFetch(community, `${url}`, 'communityId');
}

export function editCommunity(community) {
  return editFetch(community, `${url}/${community.communityId}`)
}

export function deleteCommunity(communityId) {
  return deleteFetch(`${url}/${communityId}`);
}

export async function findAll() {
  const response = await fetch(url);
  if (response.ok) {
    return response.json();
  }
  return Promise.reject("Could not fetch communities.")
}

export async function findById(communityId) {
  const response = await fetch(`${url}/${communityId}`);
  if (response.ok) {
    return response.json();
  }
  return Promise.reject(`Could not fetch commnuity ${communityId}.`);
}

export async function deleteById(communityId) {
  const config = {
    method: "DELETE",
    headers: {
      "Authorization": `Bearer ${localStorage.getItem("PP_JWT")}`
    }
  };

  const response = await fetch(`${url}/${communityId}`, config);
  if (response.ok) {
    return;
  }
  return Promise.reject(`Could not delete community with id ${communityId}.`)
}