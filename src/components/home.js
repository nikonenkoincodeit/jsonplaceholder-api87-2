import { getData } from "../api";
import { markupUsers } from "../markup";
import { tBodyEl } from "../refs";
import { addMarkUp } from "../helpers";

window.addEventListener("load", init);

function init() {
  getData("users")
    .then((resp) => {
      const markup = markupUsers(resp);

      addMarkUp(tBodyEl, markup);
    })
    .catch((err) => console.log(err.message));
}
tBodyEl.addEventListener("click", onClick);
function onClick(evt) {
  console.log(evt.target.closest("tr").dataset.userid);
  location.href = `user.html?userid=${evt.target.closest("tr").dataset.userid}`;
}
