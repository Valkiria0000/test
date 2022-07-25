import getData from "./getData";
import renderUsers from "./renderUsers";

const load = () => {
  getData().then((data) => {
    renderUsers(data);
  });
};

export default load;
