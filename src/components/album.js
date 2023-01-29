import { getData } from "../api";
import { createCardMarkup } from "../markup";
import { userListPhotos } from "../refs";
import { addMarkup } from "../helpers";

const albumId = location.search.split("=")[1] || 1;

getData(`photos?albumId=${albumId}`)
  .then((response) => {
    const markup = createCardMarkup(response);
    addMarkup(userListPhotos, markup);
    // console.log(markup);
    console.log(response);
  })
  .catch(console.log);
