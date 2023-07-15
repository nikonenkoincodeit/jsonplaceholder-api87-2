import { getData } from "../api";
import { createCardMarkup } from "../markup";
import { addMarkUp } from "../helpers";
import { albumPhotosEl } from "../refs";

const queryParam = location.search;
const newUrl = new URLSearchParams(queryParam);
const albumId = newUrl.get("albumid");

window.addEventListener("load", infoAlbumOnLoad);

function infoAlbumOnLoad() {
  getData(`photos?albumId=${albumId}`)
    .then((photo) => {
      const photoMarkup = createCardMarkup(photo);
      addMarkUp(albumPhotosEl, photoMarkup);
    })
    .catch((error) => console.log(error.message));
}
