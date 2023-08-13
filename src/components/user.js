import { getData } from "../api";
import { markupByUserId } from "../markup";
import { addMarkup } from "../helpers";
import { tableUserEl } from "../refs";

const search = location.search;
const paramsString = new URLSearchParams(search);
const userId = paramsString.get("userId");
console.log(userId);

getData("users/" + userId).then((res) => {
  const markup = markupByUserId(res);
  addMarkup(markup, tableUserEl);
});
