let input = document.querySelector('input')

function exibeTexto() {
  alert(input.value)
}

let button = document.querySelector('button')
button.onclick = exibeTexto
