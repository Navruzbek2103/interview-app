function inputInfo() {
  $(".modal-input").classList.remove("d-none");
  window.scrollTo({
    top: 0,
  })
  $("body").style.overflow = 'hidden'
  $(".modal-input").addEventListener("click", (e) => {
    if (e.target.className === "modal-input__wrapper" || e.target.className === "modal-input") {
      $(".modal-input").classList.add("d-none")
      $("body").style.overflow = 'scroll'

    }
  })
}
