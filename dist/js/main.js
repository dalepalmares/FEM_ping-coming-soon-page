const errorMsg = document.getElementById("errorMsg");
const email = document.querySelector(".input");

function check() {
  if (email.value.length >= 1) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
      errorMsg.classList.add("hidden");
      email.classList.remove("border-secondary-lightRed");
    } else {
      errorMsg.classList.remove("hidden");
      email.classList.add("border-secondary-lightRed");
    }
  }
}
