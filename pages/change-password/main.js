const inputPassword = document.querySelector("#password")
const inputConfirmPassword = document.getElementById("confirmpassword")

const progress1 = document.querySelectorAll(".progress1")
const progress2 = document.querySelectorAll(".progress2")
const progress3 = document.querySelectorAll(".progress3")

function setColor() {
  if (inputPassword.value.length >= 4) {
    progress1.forEach(element => {
      element.style.background = "#F26C4F"
    })
  } else {
    progress1.forEach(element => {
      element.style.background = ""
    })
  }

  if (inputPassword.value.length >= 8) {
    progress2.forEach(element => {
      element.style.background = "#F3C652"
    })
  } else {
    progress2.forEach(element => {
      element.style.background = ""
    })
  }

  if (inputPassword.value.length >= 12) {
    progress3.forEach(element => {
      element.style.background = "#4FD884"
    })
  } else {
    progress3.forEach(element => {
      element.style.background = ""
    })
  }
}
