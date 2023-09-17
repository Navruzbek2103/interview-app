let elList = $(".modal-input__resultList");
let elItem = $(".modal-input__resultItem");
let elForm = $(".modal-input__form");
let elInput = $(".modal-input__form-input");


let allQuestion = [];

function inputInfo() {
  $(".modal-input").classList.remove("d-none");
  window.scrollTo({
    top: 0,
  })
  $("body").style.overflow = 'hidden'

  function closeModalInput() {
    $(".modal-input").addEventListener("click", (e) => {
      if (e.target.className === "modal-input__wrapper" || e.target.className === "modal-input" || e.target.className === "modal-input__wrapper__closeBtn" || e.target.className === "modal-input__wrapper__closeBtn-img") {
        $(".modal-input").classList.add("d-none")
        $("body").style.overflow = 'scroll'

      }
    })
  }
  closeModalInput()




  function renderInfo(allArray) {


    elForm.addEventListener("submit", (e) => {
      e.preventDefault()

      if (elInput.value.length > 0 && elInput.value !== " ") {
        // console.log($(".modal-input__form-input").value);
        allArray.push(elInput.value);

        let newElement2 = createElement("li", "modal-input__resultItem", `
        <p class="modal-input__resultItem-text">
        ${elInput.value}
        </p>
        <div class="modal-input__resultItem-btnGroup">
        <button class="btn btn-info fs-5">Edit</button>
        <button class="btn btn-danger fs-5">Delete</button>
        </div>
        `)

        $(".modal-input__resultList").appendChild(newElement2);
        elInput.value = "";
      }
      // console.log(allArray);
    })



  }
  renderInfo(allQuestion);
}

console.log(allQuestion)