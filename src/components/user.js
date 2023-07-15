import { getData } from "../api";
import { markupUsers, markupByUserId, createListAlbum } from "../markup";
import { userInfoAlbumEl, userInfoTableEl } from "../refs";
import { addMarkUp } from "../helpers";

const queryParam = location.search;
const newURL = new URLSearchParams(queryParam);
const userId = newURL.get("userid");

window.addEventListener("load", infoByUserOnLoad);
window.addEventListener("load", albumsByUserIdOnLoad);
userInfoAlbumEl.addEventListener("click", albumInfoOnClick);

function albumInfoOnClick(evt) {
  const album = evt.target.closest(".js-list-user-album");
  const albumId = album.dataset.id;
  location.href = `album.html?albumid=${albumId}`;
}

function infoByUserOnLoad() {
  getData(`users/${userId}`)
    .then((info) => {
      const userInfoMarkup = markupByUserId(info);
      addMarkUp(userInfoTableEl, userInfoMarkup);
    })
    .catch((error) => console.log(error.message));
}

function albumsByUserIdOnLoad() {
  getData(`albums?userId=${userId}`)
    .then((info) => {
      const albumUserMarkup = createListAlbum(info);
      addMarkUp(userInfoAlbumEl, albumUserMarkup);
    })
    .catch((error) => console.log(error.message));
}
