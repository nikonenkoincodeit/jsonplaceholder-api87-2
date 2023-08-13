import { getData } from "../api";
import { addMarkup } from "../helpers";
import { createCardMarkup } from "../markup";
import { photosEl } from "../refs";

const search = location.search;
const paramsString = new URLSearchParams(search);
const albumId = paramsString.get("albumId");

getData("photos?albumId=" + albumId)
  .then((res) => {
    const photoMarkup = createCardMarkup(res);
    addMarkup(photoMarkup, photosEl);
  })
  .catch((err) => console.error(err.message));
