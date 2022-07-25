import renderUsers from "./renderUsers";
function modal() {
  const modal = document.querySelector(".modal");
  const btnClose = modal.querySelector(".modal__btn-close");
  const modalDialog = modal.querySelectorAll(".modal__dialog");

  document.addEventListener("click", openCard);
  btnClose.addEventListener("click", function () {
    modal.classList.remove("modal_active");
  });

  function openCard(e) {
    if (e.target.closest(".user")) {
      console.log(e.target);
      modalDialog.forEach((itam) => {
        console.log(itam);
        modal.classList.toggle("modal_active");
      });
    } else if (!e.target.closest(".modal__dialog")) {
      modal.classList.remove("modal_active");
    }
  }
}

export default modal;
