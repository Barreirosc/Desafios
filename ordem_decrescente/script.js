function pulaLinha() {
  document.write('<br>')
  document.write('<br>')
}

function mostra(frase) {
  document.write(frase)
  pulaLinha()
}

let contador = 20

while (contador >= 0) {
  mostra(contador)
  contador = contador - 1
}

mostra('FIM')
