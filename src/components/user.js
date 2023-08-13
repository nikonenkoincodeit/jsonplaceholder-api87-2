import { getData } from "../api";
import { markupByUserId, createListAlbum } from "../markup";
import { addMarkup, getQueryParam } from "../helpers";
import { tableUserEl, albumEl } from "../refs";

const userId = getQueryParam("userId");
console.log(userId);

getData("users/" + userId)
  .then((res) => {
    const markup = markupByUserId(res);
    addMarkup(markup, tableUserEl);
  })
  .catch((err) => console.error(err.message));

getData("albums?userId=" + userId)
  .then((resp) => {
    const albumMarkup = createListAlbum(resp);
    addMarkup(albumMarkup, albumEl);
  })
  .catch((err) => console.error(err.message));

albumEl.addEventListener("click", onAlbumClick);

function onAlbumClick(event) {
  const album = event.target.closest(".js-list-user-album");
  const albumId = album.dataset.id;
  location.href = "album.html?albumId=" + albumId;
}
