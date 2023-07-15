import { getData } from "../api";
import { markupUsers } from "../markup";
import { tBodyEl } from "../refs";
import { addMarkUp } from "../helpers";

window.addEventListener("load", init);

function init() {
  getData("users")
    .then((resp) => {
      const markup = markupUsers(resp);
      console.log(markup);
      addMarkUp(tBodyEl, markup);
    })
    .catch((err) => console.log(err.message));
}
