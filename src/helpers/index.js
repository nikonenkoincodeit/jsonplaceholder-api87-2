export function addMarkup(markup, el) {
  el.insertAdjacentHTML("beforeend", markup);
}

export function getQueryParam(key) {
  const search = location.search;
  const paramsString = new URLSearchParams(search);
  return paramsString.get(key);
}
