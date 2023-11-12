//Declareção das variaveis selecionado as classe do HTML
let form = document.querySelector(".formulario")
let mask = document.querySelector(".mask-form")

//Função do Botão da section PRINCIPAL
function cliqueNoBotao() {
  form.style.left = "40%"
  mask.style.visibility = "visible"
}

//Função do Botão da section FORM
function sumirForm(){
  form.style.display = "-340px"
  mask.style.visibility = "hidden"
}
