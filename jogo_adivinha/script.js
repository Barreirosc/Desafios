function pulaLinha() {
  document.write('<br>')
  document.write('<br>')
}

function mostra(frase) {
  document.write(frase)
  pulaLinha()
}

let numeroPensado = Math.round(Math.random() * 10)
let numeroTentativas = 1

while (numeroTentativas <= 3) {
  let chute = parseInt(prompt('Digite seu chute'))

  if (chute == numeroPensado) {
    mostra('Você ACERTOU, número pensado é ' + numeroPensado)
    break
  } else {
    mostra('Você ERROU')
  }

  numeroTentativas++
}

mostra('O número pensado é ' + numeroPensado)
