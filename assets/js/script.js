let form = document.querySelector(".formulario")
let mask = document.querySelector(".mask-form")

function cliqueNoBotao() {
  form.style.left = "40%"
  mask.style.visibility = "visible"
}

function sumirForm(){
  form.style.display = "-340px"
  mask.style.visibility = "hidden"
}