import getData from "./getData";
import renderUsers from "./renderUsers";
import { searchFilter } from "./fitlers";
const search = () => {
  const searchInput = document.querySelector(".search__input");

  searchInput.addEventListener("input", (e) => {
    const value = e.target.value;
    getData().then((data) => {
      renderUsers(searchFilter(data, value));
    });
  });
};

export default search;
