import { getData } from "../api";
import { murkupByUserId, createListAlbum } from "../markup";
import { userTableRef, userAlbumRef } from "../refs";
import { addMarkup } from "../helpers";

const iserId = location.search.split("=")[1] || 1;

getData(`users/${iserId}`)
  .then((response) => {
    const markup = murkupByUserId(response);
    addMarkup(userTableRef, markup);
    // console.log(markup);
    /*console.log(response);*/
  })
  .catch(console.log);

getData(`albums?userId=${iserId}`)
  .then((response) => {
    const markup = createListAlbum(response);
    addMarkup(userAlbumRef, markup);
    // console.log(markup);
    console.log(response);
  })
  .catch(console.log);

userAlbumRef.addEventListener("click", onTargetRowClick);

function onTargetRowClick(e) {
  const albumId = e.target.closest(".js-list-user-album").dataset.id;

  if (!albumId) {
    return;
  }

  location.href = `album.html?albumId=${albumId}`;
}
