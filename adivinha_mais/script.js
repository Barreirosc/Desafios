const segredo = 5

const verifica = function () {
  let numberUser = document.querySelector('#numberUser').value

  if (numberUser == segredo) {
    alert('voce acertou')
  } else {
    alert('voce errou')
  }

  document.querySelector('#numberUser').value = ''
  document.querySelector('#numberUser').focus()
}

btnVerifica.addEventListener('click', verifica)
