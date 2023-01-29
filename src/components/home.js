import { getData } from "../api";
import { addMarkup } from "../helpers";
import { markupUSers } from "../markup";
import { tbodyRef, inputRef } from "../refs";

tbodyRef.addEventListener("click", onTargetRowClick);

getData("users")
  .then((response) => {
    const markup = markupUSers(response);
    addMarkup(tbodyRef, markup);
    console.log(markup);
  })
  .catch(console.log);

function onTargetRowClick(e) {
  const iserId = e.target.closest(".js-tr").dataset.userid;

  if (!iserId) {
    return;
  }

  location.href = `user.html?iserId=${iserId}`;
}

