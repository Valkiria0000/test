const getData = (term) => {
  return fetch(`./db/users.json?${term ? `search=${term}` : ""}`).then(
    (response) => {
      return response.json();
    }
  );
};

export default getData;
