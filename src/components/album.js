import { getData } from "../api";
import { addMarkup, getQueryParam } from "../helpers";
import { createCardMarkup } from "../markup";
import { photosEl } from "../refs";

const albumId = getQueryParam("albumId");
console.log(albumId);
getData("photos?albumId=" + albumId)
  .then((res) => {
    const photoMarkup = createCardMarkup(res);
    addMarkup(photoMarkup, photosEl);
  })
  .catch((err) => console.error(err.message));
