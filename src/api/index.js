const BASE_URL = "https://jsonplaceholder.typicode.com/";

export function getData(path) {
  return fetch(`${BASE_URL}${path}`).then((resp) => {
    if (!resp.ok) {
      throw new Error(resp.statusText || resp.status);
    }
    return resp.json();
  });
}
