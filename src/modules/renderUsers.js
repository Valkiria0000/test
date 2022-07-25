const renderUsers = (users) => {
  const userWrapper = document.querySelector(".cards");
  const modal = userWrapper.querySelector(".modal");
  const modalDialog = modal.querySelectorAll(".modal__dialog");

  users.forEach((user, indexUser) => {
    userWrapper.insertAdjacentHTML(
      "beforeend",
      `
      <div class="user">
      <p class="user__name">${user.name}</p>
      <div class="user__phone">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="user__icon"
          viewBox="0 0 16 16"
          stroke="#DD2CE9"
        >
          <path
            d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"
          />
          <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
        </svg>

        <p class="user__text">${user.phone}</p>
      </div>
     
      <div class="user__mail">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="user__icon"
          viewBox="0 0 16 16"
          stroke="#DD2CE9"
        >
          <path
            d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"
          />
        </svg>
        <a class="user__link" href="#">${user.email}</a>
      </div>
    
    </div>

  
   `
    );
  });
  modalDialog.forEach((item, indexModal) => {
    users.forEach((user, indexUser) => {
      if (indexUser == indexModal) {
        item.insertAdjacentHTML(
          "beforeend",
          `
   <h2 class="modal__title">${user.name}</h2>
   <div class="details">
     <div class="details__information">
       <p>Телефон:</p>
       <p>Почта:</p>
       <p>Дата приема:</p>
       <p>Должность:</p>
       <p>Подразделение:</p>
     </div>
     <div class="details__person">
       <a class="details__link" href="tel:${user.phone}"> ${user.phone}</a>
       <a class="details__link" href="mailto: ${user.email}">${user.email}</a>
       <p> ${user.hire_date}</p>
       <p> ${user.position_name}</p>
       <p> ${user.department}</p>
     </div>
   </div>
   <div class="info">
     <h3 class="info__title">Дополнительная информация:</h3>
     <div class="info__text">
       Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo similique,
       dolore consequatur, eos delectus doloribus vero distinctio voluptate
       possimus ratione totam vitae nulla.
     </div>
   </div>

 `
        );
      }
    });
  });
};

export default renderUsers;
