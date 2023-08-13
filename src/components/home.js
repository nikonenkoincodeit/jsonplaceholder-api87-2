import { getData } from "../api";
import { markupUsers } from "../markup";
import { addMarkup } from "../helpers";
import { usersEl } from "../refs";

usersEl.addEventListener("click", onUsersClick);

getData("users")
  .then((resp) => {
    const markup = markupUsers(resp);
    addMarkup(markup, usersEl);
  })
  .catch((err) => console.error(err.message));

function onUsersClick(e) {
  const parent = e.target.closest(".js-tr");
  const parentId = parent.dataset.userid;
  location.href = `user.html?userId=${parentId}`;
}
